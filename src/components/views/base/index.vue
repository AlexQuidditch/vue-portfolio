<template lang="html">
  <pull-to v-if="!isIOS"
           :bottom-load-method="nextRoute"
           @bottom-state-change="stateChange"
           :top-load-method="prevRoute"
           @top-state-change="stateChange"
           :topBlockHeight="25"
           :bottomBlockHeight="25">
     <template slot="top-block" slot-scope="props">
      <mat-icon-arrow-right
        :class="{ '_loading' : isLoading, '_done' : isDone }"
        class="upper-load__icon">
      </mat-icon-arrow-right>
     </template>
    <main id="main" class="main">
      <transition name="fade" mode="out-in">
        <h4 :key="Displayed.route" class="case__current">{{ DisplayedIndex }}</h4>
      </transition>
      <div class="case">
        <transition name="slide" mode="out-in">
          <div class="case-container" :key="Displayed.route">
            <router-link :to="{ path: '/case/' + Displayed.link }" tag="h1" :class=" '_' + Case"
                         class="case-title">
              <span class="case-title__task">{{ Displayed.task }}</span>
              <br />
              <span :class=" '_' + Case"
                    class="case-title__title">
                {{ Displayed.title }}
              </span>
            </router-link>
            <p class="case__description">{{ Displayed.description }}</p>
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
        <div class="bottom-load">
          <icon-arrow-right :Fill="'#404552'" class="bottom-load__arrow"></icon-arrow-right>
          <span class="bottom-load__text">Следующий проект</span>
        </div>
      </nav>
      <transition name="fade" mode="out-in">
        <router-link :to="{ path: '/case/' + Displayed.link }" tag="div"
                     :key="Displayed.background"
                     class="preview">
          <img :src=" '/static/' + Displayed.background" class="preview__background" />
          <img :src=" '/static/' + Displayed.picture " :alt="Displayed.title"
               class="preview__picture" />
        </router-link>
      </transition>
    </main>
    <template slot="bottom-block" slot-scope="props">
      <mat-icon-arrow-right :class="{ '_loading' : isLoading, '_done' : isDone }" class="bottom-load__icon"></mat-icon-arrow-right>
    </template>
  </pull-to>
  <div v-else>
    <main id="main" class="main _fallback">
      <section v-for="caseItem in Cases" :key="caseItem.route"
               class="case-section">
        <div class="case-container">
          <div>
            <router-link :to="{ path: '/case/' + caseItem.link }" tag="h1" :class=" '_' + caseItem.route"
                         class="case-title">
              <span class="case-title__task">{{ caseItem.task }}</span>
              <br />
              <span :class=" '_' + caseItem.route"
                    class="case-title__title">
                {{ caseItem.title }}
              </span>
            </router-link>
            <p class="case__description">{{ caseItem.description }}</p>
            <router-link :to="{ path: '/case/' + caseItem.link }"
                         :class=" '_' + caseItem.route"
                         class="case__link">
              <icon-arrow-right :Fill="'#fff'" class="case__link-icon"></icon-arrow-right>
              <span class="case__link-text">Смотреть проект</span>
            </router-link>
          </div>
        </div>
        <router-link :to="{ path: '/case/' + caseItem.link }" tag="div"
                     class="preview _fallback">
          <img :src=" '/static/' + caseItem.background" class="preview__background" />
          <img :src=" '/static/' + caseItem.picture " :alt="caseItem.title"
               class="preview__picture" />
        </router-link>
      </section>
    </main>
  </div>
</template>

<script>

  import PullTo from 'vue-pull-to';

  import IconArrowRight from '../../icons/arrow-right.js';
  import MatIconArrowRight from '../../icons/mat-arrow-right.js';

  export default {
    name: "PageBase",
    components: { PullTo , IconArrowRight , MatIconArrowRight },
    props: {
      'Case': {
        type: String,
        required: true
      }
    },
    data: () => ({
      isDone: false,
      isLoading: false,
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
          route: 'mpu',
          task: 'Разработка сайта',
          title: '"MPU Leicht"',
          description: 'Разработка дизайна сайта и веб-приложения для компании, специализирующейся на подготовке к MPU тесту (медицинская психологическая экспертиза).',
          picture: 'mpu/preview-screens.png',
          background: 'mpu/bg2(black).jpg',
          link: 'mpu'
        },
        {
          route: 'vdele',
          task: 'Разработка интерфейса',
          title: '"Время Пришло"',
          description: 'UX/UI, разработка структуры, взаимодействия между пользователями, прототипирование, анимация.',
          picture: 'time/preview.png',
          background: 'time/previewbg-time.jpg',
          link: 'v-dele'
        },
        {
          route: 'travel',
          task: 'Концепция и интерфейс',
          title: '"Travel.App"',
          description: 'Проработка концепции, UI, 3D-моделирование и еще много всего интересного...',
          picture: 'travel/preview.png',
          background: 'travel/bg0.jpg',
          link: 'travel-app'
        }
      ]
    }),
    created () {
      this.Displayed = this.Cases.find( item => item.route == this.Case );
      console.log(this.isIOS);
    },
    mounted () {
      this.$nextTick( () => {
        if (this.isIOS) {
          return false;
        } else {
          document.addEventListener( this.mouseWheelEvent , this.mouseWheelDetect , false );
        }
      });
    },
    beforeDestroy () {
      document.removeEventListener( this.mouseWheelEvent , this.mouseWheelDetect , false );
    },
    computed: {
      DisplayedIndex () {
        return '0' + ( this.Cases.indexOf( this.Displayed ) + 1 )
      },
      mouseWheelEvent () {
        return (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
      },
      isIOS () {
        return window.device.ios()
      }
    },
    beforeRouteUpdate ( to , from , next ) {
      if (this.isIOS) {
        return next();
      } else {
        document.removeEventListener( this.mouseWheelEvent , this.mouseWheelDetect , false );
        this.Displayed = this.Cases.find( item => item.route == to.params.Case );
        next();
        setTimeout( () => {
          document.addEventListener( this.mouseWheelEvent , this.mouseWheelDetect , false );
        }, 1250 );
      }
    },
    methods: {
      mouseWheelDetect (event) {
        const direction = ( (event.wheelDelta) ? event.wheelDelta / 120 : event.detail / -3 ) || false;
        return direction < 0 ? this.nextRoute() : this.prevRoute();
      },
      nextRoute (loaded) {
        const currentCase = this.$route.params.Case;
        for ( const i in this.Cases ) {
          if ( this.Cases[i].route == currentCase ) {
            const next = new Number(i) + 1;
            if ( next >= this.Cases.length ) {
              this.$router.push({ name: 'Base', params: { Case : 'vdele' } })
            } else {
              this.$router.push({ name: 'Base', params: { Case : this.Cases[next].route } })
            }
          }
        };
        if (loaded) loaded('done');
      },
      prevRoute (loaded) {
        const currentCase = this.$route.params.Case;
        for ( const i in this.Cases ) {
          if ( this.Cases[i].route == currentCase ) {
            const prev = new Number(i) - 1;
            if ( prev < 0 ) {
              this.$router.push({ name: 'Base', params: { Case : 'mpu' } })
            } else {
              this.$router.push({ name: 'Base', params: { Case : this.Cases[prev].route } })
            }
          }
        };
        if (loaded) loaded('done');
      },
      stateChange (state) {
        if ( state === 'trigger' ) {
          this.isLoading = true;
        } else if ( state === 'loaded-done' ) {
          this.isDone = true;
        } else if ( state === '' ) {
          this.isDone = false;
          this.isLoading = false;
        } else {
          this.isLoading = false;
        }
      }
    }
  };

</script>

<style lang="scss" src="./style.scss"></style>
