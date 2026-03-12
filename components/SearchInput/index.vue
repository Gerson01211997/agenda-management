<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { minLength } from "@vuelidate/validators";

type SearchFormProps = {
  searchQuery: string;
};

const props = defineProps<{ doctorsCount: number }>();

const emit = defineEmits<{ (e: "search", form: SearchFormProps): void }>();

const form = reactive<SearchFormProps>({
  searchQuery: "",
});

const rules = computed(() => ({
  searchQuery: { minLength: minLength(3) },
}));

const v$ = useVuelidate(rules, form);

const showNoDoctorsFound = computed(() => {
  return props.doctorsCount === 0 && form.searchQuery.length >= 3;
});

const handleSubmit = () => {
  v$.value.$validate();
  v$.value.$touch();

  if (!v$.value.$error) {
    emit("search", form);
  }
};

const clipStyle = {
  clipPath:
    "polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)",
};
</script>

<template>
  <!-- Search Section -->
  <section>
    <!-- Background image and gradient -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="Background image"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          :style="clipStyle"
        />
      </div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex items-center justify-center min-h-screen py-12 px-6 lg:px-8"
    >
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white sm:text-6xl">
          Encuentra a tu especialista ideal
        </h1>
        <p class="mt-4 text-lg text-gray-300">
          Usa nuestro buscador para encontrar rápidamente a los mejores médicos
          y especialistas según tus necesidades.
        </p>
        <div class="mt-6">
          <form @submit.prevent="handleSubmit">
            <input
              v-model="form.searchQuery"
              type="text"
              placeholder="Buscar por especialidad, ubicación..."
              @input="v$.searchQuery.$touch()"
              :class="{ 'border-red-500': v$.searchQuery.$error }"
              class="block w-full px-4 py-2 text-gray-900 rounded-md shadow-sm"
            />

            <div class="text-red-500 text-xs mt-2">
              <p v-if="v$.searchQuery.minLength.$invalid">
                Debe tener al menos 3 caracteres.
              </p>

              <p v-if="showNoDoctorsFound">No se encontraron doctores.</p>
            </div>
            <button
              type="submit"
              class="mt-4 inline-block px-6 py-3 text-sm font-semibold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
