<template lang="html">
  <main id="main" class="main travel" v-once>
    <section class="intro"></section>

    <section class="description">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
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

    <section class="first-step" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <h3 class="first-step__title">Первый этап:</h3>
        <p class="first-step__text">
          Как только мне пришла идея подобного сервиса я сразу решил сделать наброски того, как это могло бы выглядеть. Для того, чтобы пользователь сразу при заходе на сайт понимал о чем идет речь, я решил визуализировать основную фичу сервиса — а именно 3D карты.
        </p>
      </div>
    </section>

    <section class="travel-image">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <img src="/static/travel/travel-site1.jpg" alt="Страница новых задач" class="travel-image__picture" />
      </div>
    </section>

    <section class="workflow" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <h3 class="workflow__title">Процесс работы:</h3>
        <p class="workflow__text">
          Для моделирования ландшафта я использовал скриншоты с Google Maps, карту высот создал из них же, переведя изображение в черно-белый режим. Светлые участки я принял за максимальную высоту, черные — за минимальную. Немного подкорректировав, у меня вышла карта высот, которую я использовал при моделировании ландшафта в Cinema 4D. <br /><br />

          После моделирования и текстурирования выполнил пост-обработку в Photoshop, где впоследствии и сделал макет веб-сайта. <br /><br />

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
      <div class="container" data-aos="fade-left" data-aos-duration="1000">
        <img src="/static/travel/iphoneX.png" alt="Страница новых задач"
             class="adaptivity__picture" />
      </div>
    </section>

    <section class="concept">
      <div class="container">
        <h3 class="concept__title">Концепция:</h3>
        <p class="concept__text">
          Основная идея сервиса — 3D карты реального времени. Вы можете простроить маршрут с учетом растительности, ландшафта, погоды и освещенности. Идеально для походов, путешествий и открытия новых горизонтов. Сделает любое путешествие проще и безопаснее.
        </p>
      </div>
    </section>

    <section class="travel-preview">
      <div class="container _right">
        <div class="preview-column">
          <h4 class="preview-column__title">Веб-сайт:</h4>
          <p class="preview-column__content">
            Сайт представлен промо-страницей, на которой рассказаны основные функции приложения. <br /><br />

            Мощные заголовки с призывом, сочные картинки — все призвано заинтересовать потенциального путешественника.
          </p>
          <img data-aos="fade-right" data-aos-duration="1000" src="/static/travel/extra01.png" alt="" class="preview-column__picture _left" />
        </div>
      </div>
      <div class="container _left">
        <div class="preview-column">
          <h4 class="preview-column__title">Немного инноваций:</h4>
          <p class="preview-column__content">
            Карты высот сделаны из реальных спутниковых снимков, а сама высота определяется светлыми и темными участками изображения. <br /><br />

            И это не просто так: вполне возможно, что такая система в тандеме с нейросетью сможет воплотить подобный сервис
            в жизнь.
          </p>
          <img data-aos="fade-left" data-aos-duration="1000" src="/static/travel/extra02.png" alt="" class="preview-column__picture _right" />
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
              <svg class="review-list-item__title" width="77px" height="14px" viewBox="0 0 77 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>HEADERS</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-760.000000, -5466.000000)">
                  <path d="M763.24,5474.118 L766.912,5474.118 L766.912,5478.924 L770.152,5478.924 L770.152,5466.18 L766.912,5466.18 L766.912,5471.004 L763.24,5471.004 L763.24,5466.18 L760,5466.18 L760,5478.924 L763.24,5478.924 L763.24,5474.118 Z M775.426,5469.204 L781.042,5469.204 L781.042,5466.18 L772.168,5466.18 L772.168,5478.924 L781.042,5478.924 L781.042,5475.882 L775.426,5475.882 L775.426,5473.974 L780.592,5473.974 L780.592,5471.184 L775.426,5471.184 L775.426,5469.204 Z M789.016,5466.18 L793.57,5478.924 L790.114,5478.924 L789.286,5476.368 L785.884,5476.368 L785.092,5478.924 L781.636,5478.924 L786.082,5466.18 L789.016,5466.18 Z M786.604,5473.506 L788.512,5473.506 L787.63,5469.78 L787.54,5469.78 L786.604,5473.506 Z M794.416,5466.18 L799.186,5466.18 C801.742,5466.18 804.136,5467.476 804.136,5470.446 L804.136,5474.73 C804.136,5477.664 801.742,5478.942 799.186,5478.924 L794.416,5478.924 L794.416,5466.18 Z M797.656,5475.9 L799.294,5475.9 C800.392,5475.9 800.896,5475.342 800.896,5474.514 L800.896,5470.536 C800.896,5469.708 800.374,5469.186 799.294,5469.186 L797.656,5469.186 L797.656,5475.9 Z M809.122,5469.204 L814.738,5469.204 L814.738,5466.18 L805.864,5466.18 L805.864,5478.924 L814.738,5478.924 L814.738,5475.882 L809.122,5475.882 L809.122,5473.974 L814.288,5473.974 L814.288,5471.184 L809.122,5471.184 L809.122,5469.204 Z M823.234,5478.924 L820.282,5474.874 L819.706,5474.874 L819.706,5478.924 L816.448,5478.924 L816.448,5466.18 L821.542,5466.18 C824.17,5466.18 826.204,5467.386 826.276,5470.374 C826.276,5472.732 825.322,5474.064 823.774,5474.55 L827.248,5478.924 L823.234,5478.924 Z M819.706,5472.102 L821.596,5472.102 C823.63,5472.102 823.63,5469.186 821.596,5469.186 L819.706,5469.186 L819.706,5472.102 Z M827.464,5476.8 C828.652,5478.33 830.272,5479.104 831.802,5479.104 C834.142,5479.104 836.734,5477.754 836.842,5475.288 C836.986,5472.156 834.718,5471.364 832.45,5470.95 C831.46,5470.734 830.794,5470.374 830.758,5469.762 C830.812,5468.286 833.098,5468.232 834.43,5469.654 L836.536,5468.034 C835.222,5466.432 833.728,5466 832.18,5466 C829.84,5466 827.572,5467.314 827.572,5469.816 C827.572,5472.246 829.444,5473.542 831.496,5473.866 C832.54,5474.01 833.71,5474.424 833.674,5475.144 C833.584,5476.512 830.776,5476.44 829.498,5474.892 L827.464,5476.8 Z" id="HEADERS" fill="#FF144B"></path>
                </g>
              </svg>
              <svg class="review-list-item__content" width="68px" height="51px" viewBox="0 0 68 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>H1</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-826.000000, -5505.000000)">
                  <path d="M838.96,5536.752 L853.648,5536.752 L853.648,5555.976 L866.608,5555.976 L866.608,5505 L853.648,5505 L853.648,5524.296 L838.96,5524.296 L838.96,5505 L826,5505 L826,5555.976 L838.96,5555.976 L838.96,5536.752 Z M893.824,5555.976 L893.824,5505 L884.104,5505 L870.568,5519.256 L877.336,5525.16 L882.232,5521.776 L882.232,5555.976 L893.824,5555.976 Z" id="H1" fill="#202020"></path>
                </g>
              </svg>
              <p class="review-list-item__description">Uni Sans</p>
            </li>
            <li class="review-list-item _big">
              <svg class="review-list-item__title" width="44px" height="14px" viewBox="0 0 44 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>TEXT</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1040.000000, -5466.000000)">
                  <path d="M1050.269,5466 L1050.269,5467.989 L1046.345,5467.989 L1046.345,5479.014 L1043.924,5479.014 L1043.924,5467.989 L1040,5467.989 L1040,5466 L1050.269,5466 Z M1060.187,5466 L1060.187,5467.926 L1054.409,5467.926 L1054.409,5471.535 L1058.963,5471.535 L1058.963,5473.398 L1054.409,5473.398 L1054.409,5477.079 L1060.187,5477.079 L1060.187,5479.014 L1051.979,5479.014 L1051.979,5466 L1060.187,5466 Z M1065.227,5472.318 L1061.078,5466 L1063.49,5466 C1063.658,5466 1063.7795,5466.0225 1063.8545,5466.0675 C1063.9295,5466.1125 1064,5466.186 1064.066,5466.288 L1067.018,5471.058 C1067.048,5470.986 1067.081,5470.9125 1067.117,5470.8375 C1067.153,5470.7625 1067.195,5470.686 1067.243,5470.608 L1069.961,5466.333 C1070.027,5466.219 1070.099,5466.135 1070.177,5466.081 C1070.255,5466.027 1070.354,5466 1070.474,5466 L1072.787,5466 L1068.602,5472.219 L1072.904,5479.014 L1070.492,5479.014 C1070.324,5479.014 1070.1905,5478.972 1070.0915,5478.888 C1069.9925,5478.804 1069.913,5478.708 1069.853,5478.6 L1066.838,5473.614 C1066.796,5473.746 1066.739,5473.872 1066.667,5473.992 L1063.778,5478.6 C1063.706,5478.702 1063.6235,5478.7965 1063.5305,5478.8835 C1063.4375,5478.9705 1063.316,5479.014 1063.166,5479.014 L1060.907,5479.014 L1065.227,5472.318 Z M1083.488,5466 L1083.488,5467.989 L1079.564,5467.989 L1079.564,5479.014 L1077.143,5479.014 L1077.143,5467.989 L1073.219,5467.989 L1073.219,5466 L1083.488,5466 Z" id="TEXT" fill="#FF144B"></path>
                </g>
              </svg>
              <svg class="review-list-item__content" width="80px" height="53px" viewBox="0 0 80 53" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Aa</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-1098.000000, -5504.000000)">
                  <path d="M1146.312,5555.588 L1140.912,5555.588 C1140.288,5555.588 1139.784,5555.432 1139.4,5555.12 C1139.016,5554.808 1138.728,5554.412 1138.536,5553.932 L1133.712,5541.476 L1110.564,5541.476 L1105.74,5553.932 C1105.596,5554.364 1105.32,5554.748 1104.912,5555.084 C1104.504,5555.42 1104,5555.588 1103.4,5555.588 L1098,5555.588 L1118.628,5504 L1125.684,5504 L1146.312,5555.588 Z M1112.508,5536.436 L1131.768,5536.436 L1123.668,5515.448 C1123.404,5514.824 1123.146,5514.104 1122.894,5513.288 C1122.642,5512.472 1122.384,5511.596 1122.12,5510.66 C1121.88,5511.596 1121.634,5512.478 1121.382,5513.306 C1121.13,5514.134 1120.872,5514.86 1120.608,5515.484 L1112.508,5536.436 Z M1174.788,5555.588 C1174.164,5555.588 1173.684,5555.486 1173.348,5555.282 C1173.012,5555.078 1172.748,5554.676 1172.556,5554.076 L1171.836,5550.656 C1170.876,5551.52 1169.934,5552.294 1169.01,5552.978 C1168.086,5553.662 1167.126,5554.238 1166.13,5554.706 C1165.134,5555.174 1164.06601,5555.534 1162.926,5555.786 C1161.78599,5556.038 1160.52001,5556.164 1159.128,5556.164 C1157.71199,5556.164 1156.38001,5555.966 1155.132,5555.57 C1153.88399,5555.174 1152.798,5554.58 1151.874,5553.788 C1150.95,5552.996 1150.218,5551.99401 1149.678,5550.782 C1149.138,5549.56999 1148.868,5548.13601 1148.868,5546.48 C1148.868,5545.03999 1149.264,5543.65401 1150.056,5542.322 C1150.848,5540.98999 1152.13199,5539.80801 1153.908,5538.776 C1155.68401,5537.74399 1157.99999,5536.898 1160.856,5536.238 C1163.71201,5535.578 1167.21598,5535.2 1171.368,5535.104 L1171.368,5532.26 C1171.368,5529.42799 1170.75601,5527.28601 1169.532,5525.834 C1168.30799,5524.38199 1166.52001,5523.656 1164.168,5523.656 C1162.58399,5523.656 1161.25801,5523.854 1160.19,5524.25 C1159.12199,5524.646 1158.198,5525.09 1157.418,5525.582 C1156.638,5526.074 1155.966,5526.518 1155.402,5526.914 C1154.838,5527.31 1154.28,5527.508 1153.728,5527.508 C1153.296,5527.508 1152.924,5527.394 1152.612,5527.166 C1152.3,5526.938 1152.036,5526.656 1151.82,5526.32 L1150.668,5524.268 C1152.68401,5522.32399 1154.85599,5520.872 1157.184,5519.912 C1159.51201,5518.952 1162.09199,5518.472 1164.924,5518.472 C1166.96401,5518.472 1168.77599,5518.808 1170.36,5519.48 C1171.94401,5520.152 1173.27599,5521.08799 1174.356,5522.288 C1175.43601,5523.48801 1176.252,5524.93999 1176.804,5526.644 C1177.356,5528.34801 1177.632,5530.21999 1177.632,5532.26 L1177.632,5555.588 L1174.788,5555.588 Z M1161.036,5551.664 C1162.16401,5551.664 1163.196,5551.55 1164.132,5551.322 C1165.068,5551.094 1165.95,5550.77 1166.778,5550.35 C1167.606,5549.93 1168.398,5549.414 1169.154,5548.802 C1169.91,5548.19 1170.648,5547.5 1171.368,5546.732 L1171.368,5539.172 C1168.41599,5539.268 1165.90201,5539.502 1163.826,5539.874 C1161.74999,5540.246 1160.05801,5540.732 1158.75,5541.332 C1157.44199,5541.932 1156.494,5542.64 1155.906,5543.456 C1155.318,5544.272 1155.024,5545.18399 1155.024,5546.192 C1155.024,5547.152 1155.18,5547.98 1155.492,5548.676 C1155.804,5549.372 1156.23,5549.942 1156.77,5550.386 C1157.31,5550.83 1157.946,5551.154 1158.678,5551.358 C1159.41,5551.562 1160.196,5551.664 1161.036,5551.664 Z" id="Aa" fill="#202020"></path>
                </g>
              </svg>
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
          name: 'Cinema4D',
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
    }),
    mounted () {
      window.AOS.init();
    }
  };

</script>

<style lang="scss" src="./style.scss"></style>
