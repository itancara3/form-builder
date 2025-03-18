<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  UserIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  CalendarIcon,
  BellIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  PuzzlePieceIcon,
  LanguageIcon
} from '@heroicons/vue/24/outline'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const { t, locale } = useI18n()

const navigation = [
  { name: t('navigation.dashboard'), href: '/dashboard', icon: HomeIcon },
  { name: t('navigation.formBuilder'), href: '/form-builder', icon: Squares2X2Icon },
  { name: t('navigation.components'), href: '/components', icon: PuzzlePieceIcon },
  { name: t('navigation.users'), href: '/users', icon: UsersIcon },
  { name: t('navigation.reports'), href: '/reports', icon: ChartBarIcon },
  { name: t('navigation.documents'), href: '/documents', icon: DocumentTextIcon },
  { name: t('navigation.calendar'), href: '/calendar', icon: CalendarIcon },
  { name: t('navigation.orders'), href: '/orders', icon: ShoppingCartIcon },
  { name: t('navigation.profile'), href: '/profile', icon: UserIcon },
  { name: t('navigation.settings'), href: '/settings', icon: CogIcon },
]

const languages = [
  { code: 'en', name: t('language.en') },
  { code: 'es', name: t('language.es') }
]

const sidebarOpen = ref(false)
const searchQuery = ref('')
const notifications = ref([
  {
    id: 1,
    title: 'New Order #1234',
    description: 'A new order has been placed',
    time: '5 min ago',
    unread: true,
    type: 'success'
  },
  {
    id: 2,
    title: 'System Update',
    description: 'System maintenance scheduled',
    time: '1 hour ago',
    unread: true,
    type: 'warning'
  },
  {
    id: 3,
    title: 'Welcome!',
    description: 'Welcome to the dashboard',
    time: '2 hours ago',
    unread: false,
    type: 'info'
  }
])

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'Administrator'
}

const handleSearch = () => {
  console.log('Searching for:', searchQuery.value)
}

const getNotificationColor = (type) => {
  const colors = {
    success: 'bg-success-50 border-success-500',
    warning: 'bg-warning-50 border-warning-500',
    error: 'bg-error-50 border-error-500',
    info: 'bg-info-50 border-info-500'
  }
  return colors[type] || 'bg-gray-50 border-gray-300'
}

const changeLanguage = (langCode) => {
  locale.value = langCode
}
</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-700/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XMarkIcon class="h-6 w-6 text-primary-850" aria-hidden="true" />
                </button>
              </div>

              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-xl">
                <div class="flex h-16 shrink-0 items-center">
                  <div class="flex items-center gap-2">
                    <div class="h-10 w-10 rounded-full bg-primary-850 flex items-center justify-center">
                      <span class="text-xl font-bold text-white">M</span>
                    </div>
                    <span class="text-xl font-bold text-primary-850">MySystem</span>
                  </div>
                </div>
                
                <!-- User Info -->
                <div class="flex flex-col gap-2 p-4 bg-gray-75 rounded-lg">
                  <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-full bg-primary-850 flex items-center justify-center">
                      <span class="text-sm font-medium text-white">{{ user.name.charAt(0) }}</span>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-primary-850">{{ user.name }}</h3>
                      <p class="text-xs text-gray-400">{{ user.role }}</p>
                    </div>
                  </div>
                </div>

                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <router-link
                            :to="item.href"
                            :class="[
                              $route.path === item.href
                                ? 'bg-primary-850 text-white'
                                : 'text-primary-850 hover:bg-gray-75',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-all'
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                $route.path === item.href ? 'text-white' : 'text-primary-850 group-hover:text-primary-850',
                                'h-6 w-6 shrink-0 transition-all'
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 shadow-xl">
        <div class="flex h-16 shrink-0 items-center">
          <div class="flex items-center gap-2">
            <div class="h-10 w-10 rounded-full bg-primary-850 flex items-center justify-center">
              <span class="text-xl font-bold text-white">M</span>
            </div>
            <span class="text-xl font-bold text-primary-850">MySystem</span>
          </div>
        </div>

        <!-- User Info -->
        <div class="flex flex-col gap-2 p-4 bg-gray-75 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-primary-850 flex items-center justify-center">
              <span class="text-sm font-medium text-white">{{ user.name.charAt(0) }}</span>
            </div>
            <div>
              <h3 class="text-sm font-medium text-primary-850">{{ user.name }}</h3>
              <p class="text-xs text-gray-400">{{ user.role }}</p>
            </div>
          </div>
        </div>

        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <router-link
                    :to="item.href"
                    :class="[
                      $route.path === item.href
                        ? 'bg-primary-850 text-white'
                        : 'text-primary-850 hover:bg-gray-75',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium transition-all'
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        $route.path === item.href ? 'text-white' : 'text-primary-850 group-hover:text-primary-850',
                        'h-6 w-6 shrink-0 transition-all'
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 shadow-md sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Header content -->
        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <!-- Search -->
          <form class="flex flex-1" @submit.prevent="handleSearch">
            <label for="search-field" class="sr-only">Search</label>
            <div class="relative w-full max-w-md">
              <MagnifyingGlassIcon
                class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400 ml-2"
                aria-hidden="true"
              />
              <input
                id="search-field"
                class="block h-full w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-primary-850 placeholder:text-gray-400 focus:border-primary-850 focus:ring-0"
                :placeholder="t('search')"
                type="search"
                v-model="searchQuery"
              />
            </div>
          </form>

          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <!-- Language Selector -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">{{ t('language.select') }}</span>
                <LanguageIcon class="h-6 w-6 text-primary-850 hover:text-primary-600 transition-all" aria-hidden="true" />
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-lg bg-white py-2 shadow-lg elevation-2 focus:outline-none">
                  <MenuItem v-for="lang in languages" :key="lang.code" v-slot="{ active }">
                    <button
                      @click="changeLanguage(lang.code)"
                      :class="[
                        active ? 'bg-gray-75' : '',
                        'block w-full text-left px-4 py-2 text-sm text-primary-850 hover:bg-gray-75'
                      ]"
                    >
                      {{ lang.name }}
                    </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>

            <!-- Notifications -->
            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6 text-primary-850 hover:text-primary-600 transition-all" aria-hidden="true" />
                <span 
                  v-if="notifications.filter(n => n.unread).length > 0"
                  class="absolute top-0 right-0 flex h-2 w-2"
                >
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-850 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-850"></span>
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems class="absolute right-0 z-10 mt-2.5 w-80 origin-top-right rounded-lg bg-white py-2 shadow-lg elevation-2 focus:outline-none">
                  <div class="px-4 py-2 border-b border-gray-150">
                    <h3 class="text-sm font-semibold text-primary-850">Notifications</h3>
                  </div>
                  <div class="py-2 max-h-96 overflow-y-auto">
                    <MenuItem v-for="notification in notifications" :key="notification.id" v-slot="{ active }">
                      <div 
                        :class="[
                          active ? 'bg-gray-75' : '',
                          notification.unread ? getNotificationColor(notification.type) : '',
                          'px-4 py-3 cursor-pointer border-l-2 transition-all hover:bg-gray-75'
                        ]"
                      >
                        <p class="text-sm font-medium text-primary-850">{{ notification.title }}</p>
                        <p class="text-sm text-gray-400">{{ notification.description }}</p>
                        <p class="text-xs text-gray-400 mt-1">{{ notification.time }}</p>
                      </div>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <div class="h-6 w-px bg-gray-150" />
            
            <!-- User menu -->
            <div class="flex items-center gap-x-4 lg:gap-x-6">
              <span class="text-sm text-primary-850">{{ user.email }}</span>
              <div class="h-8 w-8 rounded-full bg-primary-850 flex items-center justify-center">
                <span class="text-sm font-medium text-white">{{ user.name.charAt(0) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="py-10 bg-gray-75 min-h-screen">
        <div class="px-4 sm:px-6 lg:px-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>