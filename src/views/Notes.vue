<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:25:55
 * @LastEditTime: 2021-10-20 17:38:26
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div style="margin: 0 60px">
    <el-row class="tac">
      <el-col :span="4">
        <h5>JavaScript 笔记</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <!-- <i class="el-icon-location"></i> -->
              <span>作用域闭包</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <!-- <i class="el-icon-menu"></i> -->
            <span>深浅拷贝原理 </span>
          </el-menu-item>
          <el-menu-item index="3">
            <!-- <i class="el-icon-document"></i> -->
            <span>原型 Prototype</span>
          </el-menu-item>
          <el-menu-item index="4">
            <!-- <i class="el-icon-setting"></i> -->
            <span>防抖和节流</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>