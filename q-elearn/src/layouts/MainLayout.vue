<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white text-primary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-space />
        <q-btn dense round flat icon="email" class="tw-mr-4">
          <q-badge color="red" floating transparent> 4 </q-badge>
          <q-menu>
            <q-list
              bordered
              padding
              style="max-width: 300px"
              class="text-primary"
            >
              <q-item v-for="i in 5" :key="i" clickable v-ripple>
                <q-item-section top avatar>
                  <q-avatar
                    color="primary"
                    text-color="white"
                    icon="bluetooth"
                  />
                </q-item-section>

                <q-item-section>
                  <q-item-label>Single line item</q-item-label>
                  <q-item-label caption lines="2"
                    >Secondary line text. Lorem ipsum dolor sit amet,
                    consectetur adipiscit elit.</q-item-label
                  >
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption>5 min ago</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn dense round flat icon="notifications">
          <q-badge color="red" floating transparent>+9</q-badge>
        </q-btn>
        <q-separator class="tw-ml-2" vertical />
        <q-btn size="sm" flat>
          <div class="tw-flex tw-justify-center tw-align-center">
            <q-avatar>
              <img src="../assets/img/admin.png" />
            </q-avatar>
            <div class="tw-flex tw-flex-col tw-ml-2">
              <span class="tw-font-bold">
                {{ $store.getters.getUser.username }}
              </span>
              <span class="tw-font-italic">{{ userRole }}</span>
            </div>
          </div>
          <q-menu>
            <q-list dense bordered padding class="text-primary">
              <q-item
                clickable
                v-ripple
                :active="link === 'trash'"
                @click="link = 'trash'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-icon name="account_circle" />
                </q-item-section>

                <q-item-section>Profile</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                :active="link === 'settings'"
                @click="link = 'settings'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-icon name="settings" />
                </q-item-section>

                <q-item-section>Settings</q-item-section>
              </q-item>

              <q-separator spaced />
              <q-item
                clickable
                v-ripple
                :active="link === 'help'"
                @click="link = 'help'"
                active-class="my-menu-link"
              >
                <q-item-section avatar>
                  <q-icon name="logout" />
                </q-item-section>

                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      dense
      class="bg-primary shadow-1"
    >
      <q-list class="text-white">
        <q-item
          class="tw-mb-3 tw-flex tw-flex-col tw-sticky tw-top-0 tw-bg-slate-900/40"
        >
          <q-item-section avatar class="tw-flex">
            <q-avatar class="tw-self-center" size="60px">
              <img src="../assets/img/logo.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label
              lines="2"
              class="tw-text-lg tw-text-emerald-200 tw-text-center"
            >
              {{ $store.getters.getSchool.name }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { linksList } from "../services/actionLink";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useStore();
    const user = store.getters.getUser;
    const userRole = ref("");
    const links = ref([]);

    if (user.isAdmin) {
      userRole.value = "Admin";
    } else if (user.isStudent) {
      userRole.value = "Student";
    } else if (user.isTeacher) {
      userRole.value = "Teacher";
    }
    links.value = linksList.filter((link) =>
      link.roles.includes(userRole.value.toLowerCase())
    );

    //console.log(links.value);
    return {
      userRole,
      essentialLinks: links,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
