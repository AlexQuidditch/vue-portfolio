<template lang="html">
  <main id="main" class="main travel">
    <section class="intro">
    </section>

    <section class="description">
      <div class="container">
        <div class="description-column">
          <h1 class="description__title">Travel.app</h1>
          <p class="description__text">
            Веб-сервис и приложение геолокации,
            отличительной особенностью которого
            являются 3D-карты реального времени.
          </p>
        </div>
        <div class="description-column">
          <h2 class="description__task">Задача:</h2>
          <p class="description__task-detail">
            Разработать концепцию веб-сайта и
            приложения для сервиса, подготовить
            необходимый контент и промо-материалы.
          </p>
        </div>
      </div>
    </section>

    <section class="first-step">
      <div class="container">
        <h3 class="first-step__title">Первый этап:</h3>
        <p class="first-step__text">
          Как только мне пришла идея подобного сервиса я сразу решил сделать наброски того, как это
          могло бы выглядеть. Для того, чтобы пользователь сразу при заходе на сайт понимал о чем
          идет речь, я решил визуализировать основную фичу сервиса - а именно 3D карты.
        </p>
      </div>
    </section>

    <section class="travel-image">
      <div class="container">
        <img src="/static/travel/travel-site1.jpg" alt="Страница новых задач" class="travel-image__picture" />
      </div>
    </section>

    <section class="workflow">
      <div class="container">
        <h3 class="workflow__title">Процесс работы:</h3>
        <p class="workflow__text">
          Для моделирования ландшафта я использовал скриншоты с Google Maps, карту высот создал из них же, переведя изображение в черно-белый режим. Светлые участки я принял за максимальную высоту, черные - за минимальную. Немного подкорректировав, у меня вышла карта высот, которую я использовал при моделировании ландшафта в Cinema 4D. <br /><br />

          После моделирования и текстурирования выполнил пост-обработку в Photoshop, где в последствии и сделал макет веб-сайта. <br /><br />

          Проект в стадии доработки в свободное время.
        </p>
        <ul class="workflow-list">
          <li v-for="appItem in Apps" :key="appItem.name"
              class="workflow-item">
            <img :src=" '/static/apps/' + appItem.icon " :alt="appItem.name"
                 class="workflow-item__icon" />
          </li>
        </ul>
      </div>
    </section>

    <section class="adaptivity">
      <div class="container">
        <img src="/static/travel/phone.png" alt="Страница новых задач" class="adaptivity__picture" />
      </div>
    </section>

    <section class="concept">
      <div class="container">
        <h3 class="concept__title">Концепция:</h3>
        <p class="concept__text">
          Основная идея сервиса - 3D карты реального времени. Вы можете простроить маршрут с учетом растительности, ландшафта, погоды и освещенности. Идеально для походов, путешествий и открытия новых горизонтов. Сделает любое путешествие проще и безопаснее.
        </p>
      </div>
    </section>

    <section class="travel-preview">
      <div class="container _right">
        <div class="preview-column">
          <h4 class="preview-column__title">Веб-сайт:</h4>
          <p class="preview-column__content">
            Сайт представлен промо-страницей, на которой рассказаны основные функции приложения. <br /><br />

            Мощные заголовки с призывом, сочные картинки - все призванно заинтересовать потенциального путешественника.
          </p>
          <img src="/static/travel/extra01.png" alt="" class="preview-column__picture _left" />
        </div>
      </div>
      <div class="container _left">
        <div class="preview-column">
          <h4 class="preview-column__title">Немного инноваций:</h4>
          <p class="preview-column__content">
            Карты высот сделаны из реальных спутниковых снимков, а сама высота определяется светлыми и темными участками изображения. <br /><br />

            И это не спроста. Вполне возможно, что такая система в тандеме с нейросетью сможет воплатить подобный сервис
            в жизнь.
          </p>
          <img src="/static/travel/extra02.png" alt="" class="preview-column__picture _right" />
        </div>
      </div>
    </section>

    <section class="review">
      <span class="review__back">TYPOGRAPHY</span>
      <div class="container">
        <div class="review-column">
          <h3 class="review__title">Шрифты и цвет</h3>
          <p class="review__text">
            Проект выполнен в серо-белой гамме с
            зеленым, желтым и красным акцентными
            цветами. Шрифтовая гарнитура Uni Sans для
            заголовков и Lato для всего остального.
          </p>
        </div>
        <div class="review-column">
          <ul class="review-list">
            <li class="review-list-item _big">
              <p class="review-list-item__title">HEADERS</p>
              <span class="review-list-item__content">H1</span>
              <p class="review-list-item__description">Uni Sans</p>
            </li>
            <li class="review-list-item _big">
              <p class="review-list-item__title" style="font-family:'Lato-light'">TEXT</p>
              <span class="review-list-item__content" style="font-family:'Lato-regular'">Aa</span>
              <p class="review-list-item__description">Lato</p>
            </li>
            <li class="review-list-item _8CC34B">
              <p class="review-list-item__description">8CC34B</p>
            </li>
            <li class="review-list-item _FFBE46">
              <p class="review-list-item__description">FFBE46</p>
            </li>
            <li class="review-list-item _small _FF144B">
              <p class="review-list-item__description">FF144B</p>
            </li>
            <li class="review-list-item _small _202020">
              <p class="review-list-item__description">202020</p>
            </li>
            <li class="review-list-item _small _F7F7F7">
              <p class="review-list-item__description">F7F7F7</p>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <bottom-navigation></bottom-navigation>

  </main>
</template>

<script>

  import BottomNavigation from '../../layout/bottom-nav/index.vue';

  export default {
    name: "Travel-App",
    components: { BottomNavigation },
    data: () => ({
      Apps: [
        {
          name: 'Cinema 4D',
          icon: 'C4D_Logo.png'
        },
        {
          name: 'Adobe Photoshop CC',
          icon: 'photoshop-cc.png'
        },
        {
          name: 'Zeplin',
          icon: 'zeplin.png'
        }
      ]
    })
  };

</script>

<style lang="scss" src="./style.scss"></style>
