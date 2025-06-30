<script setup>
import { Dropdown, Menu, MenuItem, SubMenu } from "ant-design-vue";
import { Menu as LucideMenu } from "lucide-vue-next";
</script>

<template>
  <Dropdown trigger="['click']" placement="bottom">
    <LucideMenu size="14" />
    <template #overlay>
      <Menu>
        <MenuItem>1st menu item</MenuItem>
        <MenuItem>2nd menu item</MenuItem>
        <div style="border-bottom: 1px solid var(--border)"></div>
        <SubMenu key="sub1" title="sub menu">
          <MenuItem>3rd menu item</MenuItem>
          <MenuItem>4th menu item</MenuItem>
        </SubMenu>
        <SubMenu key="sub2" title="disabled sub menu" disabled>
          <MenuItem>5d menu item</MenuItem>
          <MenuItem>6th menu item</MenuItem>
        </SubMenu>
      </Menu>
    </template>
  </Dropdown>
</template>

<style scoped></style>
