<template>
  <div class="flex my-14 justify-center items-center text-2xl">
    <font-awesome-icon :icon="dataShareTitle.icon"
    class="text-c-orange6"/>
    <h1 class="mx-4 font-bold text-2.5xl">
      {{ dataShareTitle.title }}
    </h1>
    <span class="ml-2">
      <font-awesome-icon :icon="dataShareTitle.iconSearch"
      class="text-grey6 bg-grey1 p-1 rounded-md"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VTitle',
  props: {
    dataShareTitle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>