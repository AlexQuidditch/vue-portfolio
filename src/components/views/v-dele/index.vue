<template lang="html">
  <main id="main" class="main v-dele">
    <section class="intro">

      <div class="intro__video"></div>

    </section>

    <section class="description">

      <div class="container">
        <div class="description-column">
          <h1 class="description__title">Время пришло</h1>
          <p class="description__text">
            Биржа фриланса, основной аудиторией
            которого выступают студенты ВУЗов и
            начинающие специалисты.
          </p>
        </div>
        <div class="description-column">
          <h2 class="description__task">Задача:</h2>
          <p class="description__task-detail">
            Разработать интерфейс веб-сайта, структуру,
            проработать взаимодействия между
            пользователями и навигацию. Представить
            наглядный пример функциональности для
            презентации проекта перед инвесторами.
          </p>
        </div>
      </div>

    </section>

    <section class="first-step">

      <div class="container">
        <h3 class="first-step__title">Первый этап:</h3>
        <p class="first-step__text">
          Проект мне достался в виде текстового ТЗ и нескольких прототипов основных функций, поэтому
          первым делом я отправился в сервис майд-мэппинга MindMeister, дабы разработать структуру,
          проработать связи между страницами и максимально быстро утверждать все изменения с
          заказчиком, а также для новых предложений и замечаний, чтобы по-возможности решать все
          вопросы до отрисовки готовых макетов.
        </p>
      </div>

    </section>

    <section class="adaptivity">
      <div class="container">
        <img src="/static/time/mobile-mainpage.jpg" alt="Адаптивность в подарок" class="adaptivity__picture _first" />
        <div class="adaptivity-column"></div>
        <div class="adaptivity-column">
          <h3 class="adaptivity__title">
            Адаптивность
            в подарок
          </h3>
          <p class="adaptivity__text">
            Изначально запланировано не было,
            но как-то так получилось, что
            дополнительно к каждой странице
            были отрисованы макеты под
            смартфон и планшет.
          </p>
        </div>
        <img src="/static/time/News.jpg" alt="Страница новых задач" class="adaptivity__picture _second" />
      </div>
    </section>

    <section class="workflow">
      <div class="container">
        <h3 class="workflow__title">Процесс работы:</h3>
        <p class="workflow__text">
          Второй этап - разработка интеррактивных прототипов страниц в <span>Axure RP</span> для презентации заказчику. <br /><br />

          Когда все предложения и замечания были рассмотрены, а прототипы утверждены, пришло время разработки дизайна в <span>Sketch</span> и анимации готовых макетов в <span>After Effects</span>, чтобы заказчик мог представить проект инвесторам. <br /><br />

          Готовые макеты было решено передать верстальщику через <span>Zeplin</span>. <br />
          На данный момент проект в процессе верстки.
        </p>
        <ul class="workflow-list">
          <li v-for="appItem in Apps" :key="appItem.name"
              class="workflow-item">
            <img :src=" '/static/apps/' + appItem.icon " :alt="appItem.name"
                 class="workflow-item__icon" />
          </li>
        </ul>
        <img src="/static/time/ipad.png" alt=""
             class="workflow__picture" />
      </div>
    </section>

  </main>
</template>

<!-- <script src="./script.js"> -->
<script>

  export default {
    name: "V-Dele",
    data: () => ({
      Apps: [
        {
          name: 'MindMeister',
          icon: 'mindmeister.png'
        },
        {
          name: 'Axure RP',
          icon: 'axure-rp.png'
        },
        {
          name: 'Sketch',
          icon: 'sketch.png'
        },
        {
          name: 'After Effects',
          icon: 'after-effects-cc.png'
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
