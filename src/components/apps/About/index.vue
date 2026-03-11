<script setup lang="ts">
import { NDivider, NGradientText, NTag } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { get } from '@/api/system/about'
import srcSvglogo from '@/assets/logo.svg'
import srcGithub from '@/assets/about_image/github.png'
import srcTelegram from '@/assets/about_image/telegram.svg'
import srcMarket from '@/assets/about_image/market.svg'

interface Version {
  versionName: string
  versionCode: number
}

const versionName = ref('')
const frontVersion = import.meta.env.VITE_APP_VERSION || 'unknown'

const githubUrl = 'https://github.com/zzky88/Ywd-Panel/tree/ywd-panel-mvp'

function openLink(url: string) {
  window.open(url, '_blank')
}

onMounted(() => {
  get<Version>().then((res) => {
    if (res.code === 0)
      versionName.value = res.data.versionName
  })
})
</script>

<template>
  <div class="pt-5">
    <div class="flex flex-col items-center justify-center">
      <img :src="srcSvglogo" width="100" height="100" alt="">
      <div class="text-3xl font-semibold">
        Ywd-Panel
      </div>
      <div class="text-xl">
        <NGradientText type="info">
          <span class="font-semibold">Ver: {{ versionName }}</span>
        </NGradientText>
      </div>
      <div class="mt-2 text-sm text-gray-500">
        MVP preview build
      </div>
    </div>

    <NDivider style="margin:10px 0">
      •
    </NDivider>
    <div class="flex flex-col items-center justify-center text-base">
      <div class="flex mt-[10px] flex-wrap justify-center">
        <div class="flex items-center mx-[10px] cursor-pointer" @click="openLink(githubUrl)">
          <img class="w-[20px] h-[20px] mr-[5px]" :src="srcGithub" alt="">
          <span class="link">GitHub Repo</span>
        </div>
        <div class="flex items-center mx-[10px]">
          <img class="w-[20px] h-[20px] mr-[5px]" :src="srcTelegram" alt="">
          <span class="link">Self-hosted dashboard MVP</span>
        </div>
        <div class="flex items-center mx-[10px]">
          <img class="w-[20px] h-[20px] mr-[5px]" :src="srcMarket" alt="">
          <span class="link">Navigation + status panel</span>
        </div>
      </div>
      <div class="mt-2 text-xs text-gray-400 text-center break-all">
        {{ githubUrl }}
      </div>

      <div class="mt-5">
        <NTag :bordered="false" size="small">
          {{ $t("apps.about.frontVersionText") }}: FV-{{ frontVersion }}
        </NTag>
      </div>

      <div class="mt-4 text-sm text-gray-500 text-center">
        当前正在基于现有底座收口为 Ywd-Panel 的首版 MVP。
      </div>
    </div>
  </div>
</template>

<style>
.link{
    color:rgb(0, 89, 255)
}
</style>
