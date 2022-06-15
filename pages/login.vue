<template>
  <div class="w-380px p-sm">
    <n-space>
      <n-input placeholder="请输入" />
      <n-button>Hello {{ value }}</n-button>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
const value = ref('hello123')
</script>
