<template>
  <div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-row>
      <van-col offset="10" span="8">
        <van-button @click="tosetting" type="primary">提交</van-button>
      </van-col>
    </van-row>

    <router-view name="setting"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route);
  },
  computed: {},
  methods: {
    tosetting() {
      this.$router.push("/home/setting");
    }
  }
};
</script>

<style scoped lang="sass">
</style>
