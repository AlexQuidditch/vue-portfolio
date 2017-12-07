<template lang="html">
  <main id="main" class="main">
    <div class="case">
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
      </router-link>
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
    </div>
    <transition name="fade" mode="out-in">
      <div :class=" '_' + Case" :key="Displayed.background"
           :style="{ backgroundImage: 'url(/static/' + Displayed.background + ')' }"
           class="preview">
        <img :src=" '/static/' + Displayed.picture " :alt="Displayed.title"
             class="preview__picture" />
      </div>
    </transition>
  </main>
</template>

<script>

  import IconArrowRight from '../../icons/arrow-right.js';

  export default {
    name: "Base",
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
          background: 'time/bg.jpg',
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

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";

  .main {
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    background-size: cover;
    background-position: 50vw top;
    background-repeat: no-repeat;
  }

  .case,
  .preview {
    width: 50%;
    min-height: 100%;
  }

  .case {
    position: relative;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-end;
    padding: 0 70px;
    &__description {
      width: 470px;
      font-size: 18px;
      line-height: 1.56;
      text-align: left;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__current {
      position: absolute auto auto 70px 9.5%;
      opacity: 0.1;
      font-size: 144px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      line-height: 1;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__link {
      position: relative;
      size: 50px;
      border-radius: 50%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      transition: .3s ease-in-out;
      &._vdele {
        background-image: linear-gradient(225deg, #50e3c2, #1c9bf7);
        background-image: linear-gradient(225deg, var(--aqua-marine), var(--azure));
      }
      &._travel {
      	background-image: linear-gradient(45deg, #8cc34b, rgba(140, 195, 75, 0.8));
      	background-image: linear-gradient(45deg, var(--booger), var(--booger--80));
      }
      &._prosto {
      	background-image: linear-gradient(225deg, #fbda61, #f76b1c);
      	background-image: linear-gradient(225deg, var(--sand-yellow), var(--orange));
      }
    }
    &__link-icon {
      position: absolute;
      @include center(xy);
      width: 25px;
    }
  }
  .case-title {
    width: 470px;
    font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: bold;
    line-height: 1.4;
    &__task {}
    &__title {
      &._vdele {
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(259deg, #50e3c2, #1c9bf7);
        background-image: linear-gradient(259deg, var(--aqua-marine), var(--azure));
      }
      &._travel {
        color: rgba(140, 195, 75, 0.99);
        color: var(--booger-99);
      }
      &._prosto {
        color: #f6a623;
        color: var(--squash);
      }
    }
  }

  .case-navigation {
    position: absolute;
    top: 50%; left: 12.5%;
    transform: translate( -50% , -50% );
  }
  .navigation-list {}
  .navigation-item {
    size: 40px 4px;
    margin: 40px 0;
    &__link {
      display: block;
      size: 40px 4px;
      background-color: rgba(74, 74, 74, 0.2);
      background-color: var(--charcoal-grey-20);
      border-radius: 5px;
      transition:
        box-shadow .2s ease-in-out,
        background-color .2s ease-in-out;
      &._vdele-active,
      &._travel-active,
      &._prosto-active {
        @include MDShadow-1;
      }
      &._vdele-active {
        background-color: #1c9bf7;
        background-color: var(--azure);
      }
      &._travel-active {
        background-color: rgba(140, 195, 75, 0.99);
        background-color: var(--booger-99);
      }
      &._prosto-active {
        background-color: #f6a623;
        background-color: var(--squash);
      }
    }
  }

  .preview {
    display: flex;
    align-items: center;
    &._vdele {
      opacity: 0.9;
      background-image: linear-gradient(240deg, #50e3c2, #1c9bf7);
      background-image: linear-gradient(240deg, var(--aqua-marine), var(--azure));
    }
    &._travel {
      opacity: 0.9;
      background-image: linear-gradient(41deg, #202020, rgba(255, 255, 255, 0.75));
      background-image: linear-gradient(41deg, var(--black), rgba(255, 255, 255, 0.75));
    }
    &._prosto {}
    &__picture {
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

</style>
