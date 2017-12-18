<template lang="html">
  <main id="main" class="main">
    <section class="contact">
      <div class="contact-circle"></div>

      <div class="container">
        <div class="contact-column">
          <h1 class="contact__title">Напишите мне</h1>
          <h3 class="contact__sub-title">и мы детально обсудим Ваше предложение</h3>
          <h4 class="contact__message">
            Вы можете связаться <br>
            со мной через почтовый ящик, <br>
            либо через форму справа.
          </h4>
          <a href="mailto:siivanov@yandex.ru" class="contact__mail">siivanov@yandex.ru</a>
        </div>

        <div class="contact-column">
          <form @submit.prevent="submit" class="contact-form">
            <h3 class="contact-form__title">Не стесняйтесь!</h3>
            <label class="contact-form__label">
              <input v-model="Form.name"
                     type="text" required class="contact-form__input" placeholder="Ваше имя*" />
              <span class="contact-form__placeholder">Ваше имя*</span>
              <i class="contact-form__bar"></i>
            </label>
            <label class="contact-form__label">
              <input v-model="Form.mail" type="email"
                     required class="contact-form__input" placeholder="Ваш E-mail*" />
              <span class="contact-form__placeholder">Ваш E-mail*</span>
              <i class="contact-form__bar"></i>
            </label>
            <label class="contact-form__label">
              <textarea v-model="Form.message"
                        type="text" required class="contact-form__input" rows="2"
                        placeholder="Расскажите немного о Вашем предложении"></textarea>
              <span class="contact-form__placeholder">Расскажите немного о Вашем предложении</span>
              <i class="contact-form__bar"></i>
            </label>
            <button class="contact-form__submit">Отправить</button>
          </form>
        </div>

      </div>
    </section>
  </main>
</template>

<script>

  export default {
    name: "contact",
    data: () => ({
      Form: {
        name: '',
        mail: '',
        message: '',
      }
    }),
    methods: {
      submit (event) {
        // this.$http.post(``)
        //   .then( response => {
        //     console.log(response);
        //   })
        //   .catch( error => {
        //     console.error(error)
        //   })
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";
  @import "../../../stylesheets/partials/_layout.scss";

  .contact {
    width: 100%;
    height: 100vh;
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding-top: 200px;
      @include MQ(Pp) {
        flex-flow: column;
        padding-top: 150px;
      }
    }
    .contact-column {
      flex: 1 1 50%;
      min-width: 45%;
      max-width: 50%;
      @include MQ(Pp) {
        flex-basis: 100%;
        max-width: initial;
      }
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 72px;
      font-weight: 800;
      letter-spacing: 1px;
      color: #404552;
      text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      @include MQ(Pp) {
        font-size: 12vw;
      }
    }
    &__sub-title {
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 18px;
      text-align: left;
      color: #404552;
    }
    &__message {
      margin-top: 120px;
      font-family: 'Panton-light', Arial, Helvetica, sans-serif;
      font-size: 24px;
      line-height: 1.67;
      color: #404552;
      @include MQ(Pp) {
        margin-top: 30px;
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

  .contact-circle {
    position: absolute;
    top: 140px; left: 50%;
    width: 728px;
    height: 700px;
    background-image: linear-gradient(125deg, #7bcbfb, #1c9bf7);
    background-image: linear-gradient(125deg, #7bcbfb, var(--azure));
    transform: translateX( -50% );
    border-radius: 50%
  }

  .contact-form {
    position: relative;
    width: 100%;
    margin-top: 115px;
    padding: 60px 80px;
    background-color: #fff;
    background-color: var(--whited);
    box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.3);
    @include MQ(Pp) {
      padding: 20px;
      margin-top: 30px;
    }
    &__title {
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      font-size: 36px;
      font-weight: 800;
      line-height: 1;
      text-align: center;
      color: #404552;
      @include MQ(Pp) {
        font-size: 8vw;
      }
    }
    &__label {
      position: relative;
      display: block;
      margin-top: 2.25rem;
      margin-bottom: 2.25rem;
      @include MQ(Pp) {
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
      }
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
      @include MQ(Pp) {
        font-size: 0.8rem;
      }
      &::placeholder {
        opacity: 0;
      }
      &:focus,
      &:valid {
        color: #333;
        & ~ .contact-form__placeholder {
          font-size: 0.8rem;
          color: gray;
          top: -1rem;
          left: 0;
          @include MQ(Pp) {
            font-size: 0.75rem;
          }
        }
      }
      &:focus {
        outline: none;
        & ~ .contact-form__placeholder {
          color: #1c9bf7;
        }
        & ~ .contact-form__bar::before {
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
      @include MQ(Pp) {
        font-size: 0.9rem;
      }
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
      width: 200px;
      height: 50px;
      margin-top: 30px;
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
        margin-top: 0;
      }
    }
  }

</style>
