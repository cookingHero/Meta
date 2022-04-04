<template>
    <div>Vue Components {{ counter.count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/index'

const counter = useCounterStore()
</script>