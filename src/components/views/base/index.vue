<template lang="html">
  <main id="main" class="main">
    <div class="case">
      <transition name="fade" mode="out-in">
        <div class="case-container" :key="Displayed.route">
          <h1 class="case-title">
            <span class="case-title__task">{{ Displayed.task }}</span>
            <br />
            <span :class=" '_' + Case"
                  class="case-title__title">
              {{ Displayed.title }}
            </span>
          </h1>
          <p class="case__description">{{ Displayed.description }}</p>
          <h4 class="case__current">{{ DisplayedIndex }}</h4>
          <router-link :to="{ path: '/case/' + Displayed.link }"
                      :class=" '_' + Case"
                      class="case__link">
            <icon-arrow-right :Fill="'#fff'" class="case__link-icon"></icon-arrow-right>
            <span class="case__link-text">Смотреть проект</span>
          </router-link>
        </div>
      </transition>
    </div>
    <nav class="case-navigation">
      <ul class="navigation-list">
        <li v-for="caseRoute in Cases" :key="caseRoute.route"
            class="navigation-item">
          <router-link :to="{ name: 'Base', params: { Case : caseRoute.route } }"
                        :active-class=" '_' + caseRoute.route + '-active' "
                        class="navigation-item__link">
          </router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade" mode="out-in">
      <div :key="Displayed.background" class="preview">
        <img :src=" '/static/' + Displayed.background" class="preview__background" />
        <img :src=" '/static/' + Displayed.picture " :alt="Displayed.title"
             class="preview__picture" />
      </div>
    </transition>
  </main>
</template>

<script>

  import IconArrowRight from '../../icons/arrow-right.js';

  export default {
    name: "PageBase",
    components: { IconArrowRight },
    props: {
      'Case': {
        type: String,
        required: true
      }
    },
    data: () => ({
      Displayed: {
        route: '',
        task: '',
        title: '',
        description: '',
        picture: '',
        background: ''
      },
      Cases: [
        {
          route: 'vdele',
          task: 'Разработка интерфейса',
          title: '"Время Пришло"',
          description: 'UX/UI, разработка структуры, взаимодействия между пользователями, прототипирование, анимация.',
          picture: 'time/preview.png',
          background: 'time/time.jpg',
          link: 'v-dele'
        },
        {
          route: 'travel',
          task: 'Концепция и интерфейс',
          title: '"Travel.App"',
          description: 'Проработка концепции, UI, 3D-моделирование и еще много всего интересного',
          picture: 'travel/preview.png',
          background: 'travel/bg0.jpg',
          link: 'travel-app'
        },
        {
          route: 'prosto',
          task: 'Разработка сайта рекламной компании',
          title: '"ВсёПросто"',
          description: 'Разработка сайта для студии рекламы под ключ. UI, анимация, Fluent Design.',
          picture: 'vseprosto/preview.png',
          background: 'vseprosto/preview-bg.jpg',
          link: 'vse-prosto'
        }
      ]
    }),
    computed: {
      DisplayedIndex() {
        return '0' + ( this.Cases.indexOf( this.Displayed ) + 1 )
      }
    },
    created() {
      this.Displayed = this.Cases.find( item => item.route == this.Case );
    },
    watch: {
      '$route'( to , from ) {
        this.Displayed = this.Cases.find( item => item.route == this.Case );
      }
    }
  };

</script>

<style lang="scss" src="./style.scss"></style>
