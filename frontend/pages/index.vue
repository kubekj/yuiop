<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";

interface Experience {
  id: number;
  name: string;
  language: string;
  status: string;
  bookings: number;
}

interface Booking {
  id: number;
  experience: string;
  date: string;
  time: string;
  guests: number;
}

// Sample data for the dashboard
const recentExperiences: Experience[] = [
  {
    id: 1,
    name: "City Tour",
    language: "English",
    status: "Published",
    bookings: 12,
  },
  {
    id: 2,
    name: "Coffee Workshop",
    language: "English",
    status: "Draft",
    bookings: 0,
  },
  {
    id: 3,
    name: "Wine Tasting",
    language: "French",
    status: "Published",
    bookings: 8,
  },
];

const upcomingBookings: Booking[] = [
  {
    id: 1,
    experience: "City Tour",
    date: "2024-05-15",
    time: "10:00 AM",
    guests: 4,
  },
  {
    id: 2,
    experience: "City Tour",
    date: "2024-05-16",
    time: "2:00 PM",
    guests: 6,
  },
  {
    id: 3,
    experience: "Wine Tasting",
    date: "2024-05-20",
    time: "6:00 PM",
    guests: 2,
  },
];

// Table column definitions
const experienceColumns: TableColumn<Experience>[] = [
  { key: "name", label: "Experience Name", id: "name" },
  { key: "language", label: "Language", id: "language" },
  { key: "status", label: "Status", id: "status" },
  { key: "bookings", label: "Bookings", id: "bookings" },
  { key: "actions", label: "Actions", id: "actions" },
];

const bookingColumns: TableColumn<Booking>[] = [
  { key: "experience", label: "Experience", id: "experience" },
  { key: "date", label: "Date", id: "date" },
  { key: "time", label: "Time", id: "time" },
  { key: "guests", label: "Guests", id: "guests" },
  { key: "actions", label: "Actions", id: "actions" },
];

// Helper functions to safely get row properties
const getRowStatus = (row: Record<string, unknown>): string =>
  (row?.status as string) || "";
const getRowDate = (row: Record<string, unknown>): string =>
  (row?.date as string) || "";
</script>

<template>
  <div class="min-h-screen p-8">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Overview</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-1">
        Welcome back! Here's what's happening with your experiences.
      </p>
    </div>

    <!-- Dashboard Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <UCard class="bg-white dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Total Experiences
            </p>
            <p
              class="text-3xl font-semibold text-gray-900 dark:text-white mt-1"
            >
              3
            </p>
          </div>
          <div class="bg-primary-50 p-3 rounded-full">
            <UIcon
              name="i-heroicons-sparkles"
              class="w-6 h-6 text-primary-600"
            />
          </div>
        </div>
        <div class="mt-4">
          <p
            class="text-sm text-green-600 dark:text-green-400 flex items-center"
          >
            <UIcon name="i-heroicons-arrow-up" class="w-4 h-4 mr-1" />
            <span>25% from last month</span>
          </p>
        </div>
      </UCard>

      <UCard class="bg-white dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Total Bookings
            </p>
            <p
              class="text-3xl font-semibold text-gray-900 dark:text-white mt-1"
            >
              20
            </p>
          </div>
          <div class="bg-primary-50 p-3 rounded-full">
            <UIcon
              name="i-heroicons-calendar"
              class="w-6 h-6 text-primary-600"
            />
          </div>
        </div>
        <div class="mt-4">
          <p
            class="text-sm text-green-600 dark:text-green-400 flex items-center"
          >
            <UIcon name="i-heroicons-arrow-up" class="w-4 h-4 mr-1" />
            <span>40% from last month</span>
          </p>
        </div>
      </UCard>

      <UCard class="bg-white dark:bg-gray-800">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">Revenue</p>
            <p
              class="text-3xl font-semibold text-gray-900 dark:text-white mt-1"
            >
              $1,250
            </p>
          </div>
          <div class="bg-primary-50 p-3 rounded-full">
            <UIcon
              name="i-heroicons-currency-dollar"
              class="w-6 h-6 text-primary-600"
            />
          </div>
        </div>
        <div class="mt-4">
          <p
            class="text-sm text-green-600 dark:text-green-400 flex items-center"
          >
            <UIcon name="i-heroicons-arrow-up" class="w-4 h-4 mr-1" />
            <span>15% from last month</span>
          </p>
        </div>
      </UCard>
    </div>

    <!-- Recent Experiences -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Experiences
        </h2>
        <UButton to="/create" color="primary" variant="ghost" size="sm">
          <template #leading>
            <UIcon name="i-heroicons-plus" class="w-4 h-4" />
          </template>
          Create New
        </UButton>
      </div>

      <UCard class="overflow-hidden">
        <UTable :rows="recentExperiences" :columns="experienceColumns">
          <template #status-data="{ row }">
            <UBadge
              :color="getRowStatus(row) === 'Published' ? 'success' : 'neutral'"
              size="sm"
            >
              {{ getRowStatus(row) }}
            </UBadge>
          </template>
          <template #actions-data>
            <div class="flex gap-2">
              <UButton
                color="primary"
                variant="ghost"
                icon="i-heroicons-pencil-square"
                size="xs"
              />
              <UButton
                color="primary"
                variant="ghost"
                icon="i-heroicons-eye"
                size="xs"
              />
            </div>
          </template>
        </UTable>
      </UCard>
    </div>

    <!-- Upcoming Bookings -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
          Upcoming Bookings
        </h2>
        <UButton to="/bookings" color="primary" variant="ghost" size="sm">
          View All
        </UButton>
      </div>

      <UCard class="overflow-hidden">
        <UTable :rows="upcomingBookings" :columns="bookingColumns">
          <template #date-data="{ row }">
            {{ new Date(getRowDate(row)).toLocaleDateString() }}
          </template>
          <template #actions-data>
            <div class="flex gap-2">
              <UButton
                color="primary"
                variant="ghost"
                icon="i-heroicons-information-circle"
                size="xs"
              />
              <UButton
                color="primary"
                variant="ghost"
                icon="i-heroicons-calendar"
                size="xs"
              />
            </div>
          </template>
        </UTable>
      </UCard>
    </div>
  </div>
</template>
