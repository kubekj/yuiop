<script setup lang="ts">
const languages = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Portuguese", label: "Portuguese" },
  { value: "Italian", label: "Italian" },
];

const selectedLanguage = ref("English");
</script>

<template>
  <div class="p-8 max-w-5xl mx-auto">
    <div class="flex">
      <!-- Main Form Content -->
      <div class="flex-1 pr-10">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Descibe your experience
        </h1>

        <div class="space-y-8">
          <!-- Heading Section -->
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Heading</label
              >
              <UInput
                placeholder="Give your experience a catchy headline"
                size="lg"
                class="w-full"
              />
            </div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >Language</label
              >
              <USelect
                v-model="selectedLanguage"
                :options="languages"
                size="lg"
                class="w-full"
              />
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 py-6" />

          <!-- We'll do this section -->
          <div>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              We'll do this
            </h2>
            <p
              class="mb-4 flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
              Describe what makes your experience special.
            </p>
            <UTextarea
              placeholder="Tell guests what happen during your experience"
              :rows="5"
              class="w-full"
            />
          </div>

          <!-- What is included section -->
          <div>
            <h2
              class="text-xl font-semibold text-gray-900 dark:text-white mb-4"
            >
              What is included
            </h2>
            <p
              class="mb-4 flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
              Describe in bullet points what's included in your service.
            </p>
            <UTextarea
              placeholder="Tell guests what happen during your experience"
              :rows="5"
              class="w-full"
            />
          </div>
        </div>

        <!-- Next Button -->
        <div class="flex justify-end mt-10">
          <UButton color="primary" size="lg" class="px-8"> Next </UButton>
        </div>
      </div>

      <!-- Progress Sidebar -->
      <div class="w-64">
        <div class="sticky top-8">
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-3">
              <div
                class="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
              >
                1
              </div>
              <span class="font-medium text-gray-900 dark:text-white"
                >Description</span
              >
            </div>
            <div class="w-0.5 h-6 bg-gray-300 ml-4" />
            <div class="flex items-center gap-3">
              <div
                class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
              >
                2
              </div>
              <span class="text-gray-500">Media</span>
            </div>
            <div class="w-0.5 h-6 bg-gray-300 ml-4" />
            <div class="flex items-center gap-3">
              <div
                class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
              >
                3
              </div>
              <span class="text-gray-500">Practical stuff</span>
            </div>
            <div class="w-0.5 h-6 bg-gray-300 ml-4" />
            <div class="flex items-center gap-3">
              <div
                class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
              >
                4
              </div>
              <span class="text-gray-500">Spots</span>
            </div>
            <div class="w-0.5 h-6 bg-gray-300 ml-4" />
            <div class="flex items-center gap-3">
              <div
                class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
              >
                5
              </div>
              <span class="text-gray-500">Price</span>
            </div>
            <div class="w-0.5 h-6 bg-gray-300 ml-4" />
            <div class="flex items-center gap-3">
              <div
                class="bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium"
              >
                6
              </div>
              <span class="text-gray-500">Customer information</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
