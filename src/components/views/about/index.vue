<template lang="html">
  <main id="main" class="main _column">
    <section class="about">
      <div class="about-circle"></div>
      <div class="container">
        <div class="about-column">
          <h3 class="about__pre-title">Вкратце обо мне:</h3>
          <h4 class="about__message">
            Привет! Я занимаюсь дизайном сайтов, веб-сервисов и приложений, делая их привлекательнее для Ваших клиентов. Популизирую положительный имидж компании, увеличиваю прибыль.
          </h4>
        </div>
        <div class="about-column">
          <h1 class="about__title">UX/UI</h1>
          <h2 class="about__sub-title">DESIGN</h2>
        </div>
      </div>
    </section>
    <section class="skills">
      <div class="container">
        <h3 class="skills__title">Профиль и умения</h3>
        <ul class="skills-list">
          <li class="skills-list__item">
            <i class="skills-list__item-icon"></i>
          </li>
          <li class="skills-list__item">
            <i class="skills-list__item-icon"></i>
          </li>
          <li class="skills-list__item">
            <i class="skills-list__item-icon"></i>
          </li>
        </ul>
        <article class="skills__description">
          Меня зовут Сергей и я занимаюсь веб-дизайном более трех лет. 
          Имею опыт работы над проектами как в команде, 
          так и напрямую с заказчиком. 
          <br><br>
          В работе с фронтенд-разработчиками использую современные инструменты и с заботой думаю о разработчиках, которые все это будут верстать. Умею брать на себя ответственность, вести проекты и привлекать необходимых исполнителей.
          <br><br>
          Делаю дизайн с учетом принципов пользовательского опыта (UX), люблю адаптивность, внимателен к деталям. Знаю HTML и CSS на уровне, чтобы понимать ограничения по дизайну, предметно поговорить с разработчиками-фронтендерами 
          и предложить идеи.
          <br><br>
          Делаю анимацию — как для презентаций, так и для показа разработчикам для лучшего понимания того, как и что должно выглядеть в проекте. Умею простую 3D-визуализацию.
        </article>
      </div>
    </section>
    <section class="apps">
      <div class="container">
        <h3 class="apps__title">Основное ПО</h3>
        <ul class="workflow-list">
          <li v-for="appItem in mainApps" :key="appItem.name"
              class="workflow-item">
            <img :src=" '/static/apps/' + appItem.icon " :alt="appItem.name"
                 class="workflow-item__icon" />
          </li>
        </ul>
        <h4 class="apps__title _add">Дополнительное ПО</h4>
        <ul class="workflow-list">
          <li v-for="appItem in addApps" :key="appItem.name"
              class="workflow-item">
            <img :src=" '/static/apps/' + appItem.icon " :alt="appItem.name"
                 class="workflow-item__icon" />
          </li>
        </ul>
      </div>
    </section>
    
    <section class="contacts">
      <div class="container">
        <h3 class="contacts__title">Напишите мне</h3>
        <form @submit.prevent="submit" class="about-form">
          <h4 class="about-form__title">Мы детально обсудим Ваше предложение, либо просто дружелюбно пообщаемся.</h4>
          <label class="about-form__label">
            <input v-model="Form.name"
                    type="text" required class="about-form__input" placeholder="Ваше имя*" />
            <span class="about-form__placeholder">Ваше имя*</span>
            <i class="about-form__bar"></i>
          </label>
          <label class="about-form__label">
            <input v-model="Form.mail" type="email"
                    required class="about-form__input" placeholder="Ваш E-mail*" />
            <span class="about-form__placeholder">Ваш E-mail*</span>
            <i class="about-form__bar"></i>
          </label>
          <label class="about-form__label">
            <textarea v-model="Form.message"
                      type="text" required class="about-form__input" rows="2"
                      placeholder="Расскажите немного о Вашем предложении"></textarea>
            <span class="about-form__placeholder">Расскажите немного о Вашем предложении</span>
            <i class="about-form__bar"></i>
          </label>
          <button class="about-form__submit">Отправить</button>
        </form>
      </div>
    </section>

  </main>
</template>

<script>

  export default {
    name: "About",
    data: () => ({
      Form: {
        name: '',
        mail: '',
        message: '',
      },
      mainApps: [
        {
          name: 'muse',
          icon: 'muse.png'
        },
        {
          name: 'Axure RP',
          icon: 'axure-rp.png'
        },
        {
          name: 'Photoshop CC',
          icon: 'photoshop-cc.png'
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
          name: 'illustrator-cc',
          icon: 'illustrator-cc.png'
        }
      ],
      addApps: [
        {
          name: 'C4D',
          icon: 'C4D.png'
        },
        {
          name: 'marvel',
          icon: 'marvel.png'
        },
        {
          name: 'final_cut',
          icon: 'final_cut.png'
        },
        {
          name: 'MindMeister',
          icon: 'mindmeister.png'
        },
        {
          name: 'zeplin',
          icon: 'zeplin.png'
        }
      ]
    }),
    methods: {
      submit (event) {
        console.log(event);
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";
  @import "../../../stylesheets/partials/_layout.scss";

  .about {
    width: 100%;
    height: 100vh;
    @include MQ(Pp) {
      height: auto;
    }
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      width: 60%;
      padding-top: 200px;
      @include MQ(Pp) {
        flex-flow: column;
      }
    }
    .about-column {
      flex: 1 1 50%;
      min-width: 45%;
      max-width: 50%;
      @include MQ(Pp) {
        flex-basis: 100%;
        max-width: initial;
      }
    }
    &__title {
      text-align: right;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 72px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 1px;
      color: #404552;
      text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      @include MQ(Pp) {
        display: none;
        font-size: 12vw;
      }
    }
    &__pre-title {
      margin-top: 120px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 36px;
      font-weight: 800;
      line-height: 1;
      letter-spacing: 1px;
      color: #404552;
      @include MQ(Pp) {
        display: none;
        font-size: 12vw;
      }
    }
    &__sub-title {
      text-align: right;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 42px;
      line-height: 1;
      color: #404552;
      color: var(--charcoal-grey-two);
      text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      @include MQ(Pp) {
        display: none;
      }
    }
    &__message {
      max-width: 395px;
      margin-top: 20px;
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 18px;
      line-height: 1.56;
      color: #404552;
      color: var(--charcoal-grey-two);
      @include MQ(Pp) {
        // margin-top: 30px;
        margin-top: 0;
        font-size: 6vw;
      }
    }
    &__mail {
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.67;
      text-align: left;
      color: #ff144b;
      color: var(--neon-red);
    }
  }

  .about-circle {
    position: absolute;
    top: 140px; left: 50%;
    width: 728px;
    height: 700px;
    background-image: linear-gradient(125deg, #7bcbfb, #1c9bf7);
    background-image: linear-gradient(125deg, #7bcbfb, var(--azure));
    transform: translateX(-50%);
    border-radius: 50%
  }

  .contacts {
    padding: 150px 0;
    background-color: #f5f5f5;
    @include MQ(Pp) {
      padding: 30px 0;
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 64px;
      font-weight: 800;
      letter-spacing: 0.9px;
      text-align: center;
      color: #404552;
      color: var(--charcoal-grey-two);
      @include MQ(Pp) {
        font-size: 12vw;
      }
    }
  }

  .skills {
    @include MQ(Pp) {
      margin-top: 50px;
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 64px;
      font-weight: 800;
      letter-spacing: 1px;
      text-align: center;
      color: #404552;
      @include MQ(Pp) {
        font-size: 9vw;
      }
    }
    &__description {
      width: 65%;
      margin: 100px auto 0 auto;
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-weight: 300;
      line-height: 1.67;
      text-align: center;
      color: #202020;
      color: var(--black);
    	@include MQ(Pp) {
        width: 100%;
        margin: 25px auto 0 auto;
        font-size: 5.5vw;
        text-align: left;
    	}
    }
  }

  .apps {
    padding: 100px 0;
    @include MQ(Pp) {
      padding: 30px 0;
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 36px;
      font-weight: 800;
      letter-spacing: 1px;
      text-align: center;
      color: #404552;
      color: var(--charcoal-grey-two);
      &._add {
        margin-top: 50px;
        @include MQ(Pp) {
          margin-top: 25px;
        }
      }
    	@include MQ(Pp) {
    	  font-size: 8vw;
    	}
    }

    .workflow-list {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      width: 60%;
      margin: 50px auto 0 auto;
      @include MQ(Pp) {
        width: 100%;
        margin-top: 25px;
      }
    }
    .workflow-item {
      margin: 50px;
      @include MQ(Pp) {
        margin: 10px;
      }
      &__icon {
        size: 100px;
        object-fit: contain;
        object-position: center;
        @include MQ(Pp) {
          size: 50px;
        }
      }
    }
  }

  .about-form {
    position: relative;
    display: block;
    width: 435px;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    @include MQ(Pp) {
      width: 100%;
    }
    &__title {
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 18px;
      line-height: 1.44;
      text-align: center;
      color: #404552;
      color: var(--charcoal-grey-two);
    	@include MQ(Pp) {
    	  font-size: 5.5vw;
    	}
    }
    &__label {
      position: relative;
      display: block;
      margin-top: 2.25rem;
      margin-bottom: 2.25rem;
    }
    &__input {
      display: block;
      width: 100%;
      // height: 1.9rem;
      // padding: 0.125rem 0.125rem 0.0625rem;
      font-size: 1rem;
      line-height: 1.9;
      color: transparent;
      background: none;
      border-width: 0;
      transition: all 0.28s ease;
      border-color: transparent;
      box-shadow: none;
      resize: none;
      &::placeholder {
        opacity: 0;
      }
      &:focus,
      &:valid {
        color: #333;
        & ~ .about-form__placeholder {
          font-size: 0.8rem;
          color: gray;
          top: -1rem;
          left: 0;
        }
      }
      &:focus {
        outline: none;
        & ~ .about-form__placeholder {
          color: #1c9bf7;
        }
        & ~ .about-form__bar::before {
          width: 100%;
          left: 0;
        }
      }
      
    }
    &__placeholder {
      position: absolute;
      display: block;
      top: 0.25rem;
      pointer-events: none;
      padding-left: 0.125rem;
      z-index: 1;
      color: #b3b3b3;
      font-size: 1rem;
      font-weight: normal;
      transition: all 0.28s ease;
    }
    &__bar {
      position: relative;
      display: block;
      border-bottom: 0.0625rem solid #999;
      &::before {
        content: '';
        height: 0.125rem;
        width: 0;
        left: 50%;
        bottom: -0.0625rem;
        position: absolute;
        background-color: #1c9bf7;
        transition: left 0.28s ease, width 0.28s ease;
        z-index: 2;
      }
    }
    &__submit {
      display: block;
      width: 200px;
      height: 50px;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 18px;
      text-align: center;
      color: #fff;
      border-radius: 100px;
      background-color: #ff144b;
      background-color: var(--neon-red);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    	@include MQ(Pp) {
        width: 100%;
    	}
    }
  }

</style>
