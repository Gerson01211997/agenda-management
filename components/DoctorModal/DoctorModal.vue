<script setup lang="ts">
import type { DoctorResult } from "@/utils/types/search";
import DoctorModalInfo from "./DoctorModalInfo.vue";
import { className } from "./stylesModal";

defineProps<{
  doctor: DoctorResult | null;
  show: boolean;
}>();

const emit = defineEmits<{ (e: "close"): void }>();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show && doctor"
        :class="className.container"
        @click.self="emit('close')"
      >
        <div
          :class="className.overlay"
          @click="emit('close')"
        />

        <DoctorModalInfo
          :doctor="doctor"
          @close="emit('close')"
        />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>