<template>
  <div class="order-box">
    <s-header :title="'我的订单'" :back="'/user'"></s-header>
    <van-tabs
      @change="onChangeTab"
      :color="'#c40000'"
      :title-active-color="'#c40000'"
      class="order-tab"
      v-model="status"
    >
      <van-tab title="全部" name=""></van-tab>
      <van-tab title="待付款" name="0"></van-tab>
      <van-tab title="待确认" name="1"></van-tab>
      <van-tab title="待发货" name="2"></van-tab>
      <van-tab title="已发货" name="3"></van-tab>
      <van-tab title="交易完成" name="4"></van-tab>
    </van-tabs>
    <van-pull-refresh
      v-model="refreshing"
      @refresh="onRefresh"
      class="order-list-refresh"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        @offset="300"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="order-item-box"
          @click="goTo(item.orderNo)"
        >
          <div class="order-item-header">
            <span>订单时间：{{ item.createTime }}</span>
            <span>{{ item.orderStatusString }}</span>
          </div>
          <van-card
            v-for="one in item.louMallOrderItemVOS"
            :key="one.orderId"
            :num="one.goodsCount"
            :price="one.sellingPrice"
            desc="希捷(Seagate) 移动硬盘 2TB USB3.0 简 2.5英寸 高速 轻薄 便携 兼容PS4"
            :title="one.goodsName"
            :thumb="one.goodsCoverImg"
          />
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader';
import { getOrderList } from '../service/order';

export default {
  data() {
    return {
      status: '',
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
      page: 1,
    };
  },
  components: {
    sHeader,
  },
  async mounted() {
    // this.loadData()
  },
  methods: {
    async loadData() {
      // 获取订单列表
      const {
        data,
        data: { list },
      } = await getOrderList({ pageNumber: this.page, status: this.status });
      // this.list = this.list.concat(list);
      this.list = list
      this.totalPage = data.totalPage;
      this.loading = false;
      if (this.page >= data.totalPage) this.finished = true;
    },
    onChangeTab(name, title) {
      this.status = name;
      this.onRefresh();
    },
    goTo(id) {
      this.$router.push({ path: `order-detail?id=${id}` });
    },
    goBack() {
      this.$router.go(-1);
    },
    onLoad() {
      // 加载更多
      if (!this.refreshing && this.page < this.totalPage) {
        this.page = this.page + 1;
      }
      if (this.refreshing) {
        this.list = [];
        this.refreshing = false;
      }
      this.loadData();
    },
    onRefresh() {
      this.refreshing = true;
      this.finished = false;
      this.loading = true;
      this.page = 1;
      this.onLoad();
    },
  },
};
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.order-box {
    .order-header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10000;
      .fj();
      .wh(100%, 44px);
      line-height: 44px;
      padding: 0 10px;
      .boxSizing();
      color: #252525;
      background: #fff;
      border-bottom: 1px solid #dcdcdc;
      .order-name {
        font-size: 14px;
      }
    }
    .order-tab {
      margin-top: -18px;
      position: fixed;
      left: 0;
      z-index: 1000;
      width: 100%;
    }
    .order-list-refresh {
      margin-top: 68px;
      .van-card__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .van-pull-refresh__head {
        background: #f9f9f9;
      }
      .van-list {
        min-height: calc(100vh - 88px);
        background: #f9f9f9;
        margin-top: 20px;
      }
      .order-item-box {
        margin: 20px 10px;
        background-color: #fff;
        .order-item-header {
          padding: 10px 20px 0 20px;
          display: flex;
          justify-content: space-between;
        }
        .van-card {
          background-color: #fff;
          margin-top: 0;
        }
      }
    }
  }
</style>