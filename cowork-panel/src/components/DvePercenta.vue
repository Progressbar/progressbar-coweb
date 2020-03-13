<template>
<div class="dvepercenta">
  <div class="columns is-vcentered">
    <div class="column is-4">
      <article class="tile is-child notification is-black is-size-4">
        <div class="content">
          <p class="title">Čo robíme:</p>
          <div class="content">
            <p>👼 V Progressbare už 10 rokov spájame komunity ľudí s nadšením. Od prednášok o nových technológiách cez vzdelávaco-pracovné skupiny až po vegánske večere. Naše priestory aj vďaka vašim príspevkom robíme dostupnejšími pre tých, ktorí chcú vedieť viac. </p>
            <p>🧠 Za posledný rok Progressbar navštívilo vyše 5000 ľudí, ktorí sa zúčastnili vyše 150 podujatí.  Medzi inými aj Vedatour, Machine Learning meetupy či pravidelné lekcie programovania v komunite PyLadies.</p>
            <p>Neustále sa snažíme, aby naše priestory a podujatia v nich boli kvalitnejšie, krajšie, a lepšie...</p>
          </div>
          <div class="btn-container">
            <router-link class="button is-black is-block is-large meeting"
              to="/pay">
              Podporím Vás!
            </router-link>
          </div>
        </div>
      </article>
    </div>
    <div class="column is-8">
      <img :src="`/static/img/dvepercenta/vedatour-03.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
      <img :src="`/static/img/dvepercenta/pyladies.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
    </div>
  </div>

  <div class="columns is-vcentered">
    <div class="column is-8">
      <img :src="`/static/img/community/IMG_20191005_190549.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
      <img :src="`/static/img/community/IMG_20191118_203804.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
    </div>
    <div class="column is-4">
      <article class="tile is-child notification is-black is-size-4">
        <div class="content">
          <p class="title">2019 @ Progressbar:</p>
          <div class="content" v-for="achievment in pastYear">
            <li>{{achievment}}</li>
          </div>
          <div class="btn-container">
            <router-link class="button is-black is-block is-large meeting"
              to="/pay">
              Podporím Vás!
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div class="columns is-vcentered">
    <div class="column is-8">

      <img :src="`/static/img/dvepercenta/future-1.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
      <img :src="`/static/img/dvepercenta/future-2.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
      <img :src="`/static/img/dvepercenta/future-3.jpg`" loading="lazy" alt="coworking bratislava technical meetup">
    </div>
    <div class="column is-4">
      <article class="tile is-child notification is-black is-size-4">
        <div class="content">
          <p class="title">Budúcnosť Progressbaru:</p>
          <div class="content" v-for="future in futureYear">
            <li><span v-html="future"></span></li>
          </div>
          <div class="btn-container">
            <router-link class="button is-black is-block is-large meeting"
              to="/pay">
              Podporím Vás!
            </router-link>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'dvepercenta',
  metaInfo: {
    title: 'Dve Percenta pre Progressbar'
  },
  data() {
    return {
      pastYear: [
        'postavili sme police a vyčlenili tým nový priestor - tzv. "boxík"',
        'a o pár mesiacov sme ho celý prestavali, zväčšili a odhlučnili',
        'odhlučnili sme meetingovku',
        'doviedli sme čistú vodu priamo do stredu priestoru',
        'QuickKancle sa presunuli do Progressbaru',
        'máme nový mixpult a kvalitnejší videozáznam',
        'skúsili skúšobný podcast',
        'naša prvá umelecká rezidencia',
        'priniesli sme do PB viac zelene... ooooveľa viac zelene',
        '~5000 návštevníkov',
        '>150 podujatí',
        'Páči sa Vám, čo sa nám tento rok podarilo...'
      ],
      futureYear: [
        'Samozrejme, že chceme naďalej robiť to, čo robíme teraz. <b>Avšak je toho viac:</b>',

        '<b>Nahrávame čo raz viac prednášok.</b> Radi by sme záznamy robili častejšie, kvalitnejšie a podľa možností aj naživo.',
        '<b>Priniesli sme do Progressbaru umenie</b> vo forme prvej umeleckej rezidencie. Dúfame, že budeme môcť v Progressbare privítať viac umelcov a umenia.',
        '<b>Biele stoly = podpora mládeže.</b> Tento rok sa do Progressbaru presťahoval aj študentský projekt QucikKancle, vďaka ktorému je Progressbar ešte vyťaženejší. Pracujeme na tom, aby mohol byť náš priestor využívaný efektívnejšie.',
        '<b>Progressbar presents…</b> Sme vďační za každý event, avšak niekedy chceme reagovať na to, čo vnímame ako potrebné. Vlastná dramaturgia eventov je niečo, čo si budeme môcť dovoliť, len vďaka vašej štedrosti.',
        'Budúcnosť Progressbaru môže byť lepšia aj vďaka vašej podpore...'

        // 'Samozrejme, že chceme naďalej robiť to, čo robíme teraz. Avšak je toho viac: Nahrávame čo raz viac prednášok. Radi by sme záznamy robili častejšie, kvalitnejšie a podľa možností aj naživo.',
        // 'Priniesli sme do PB umenie vo forme prvej umeleckej rezidencie. <a href="https://www.facebook.com/pg/progressbar/photos/?tab=album&album_id=3407163895966195">Dúfame, že budeme môcť v Progressbare privítať viac umelcov a umenia.</a>',
        // 'Biele stoly = podpora mládeže. Tento rok sa do Progressbaru presťahoval aj študentský projekt QucikKancle, vďaka ktorému je Progressbar ešte vyťaženejší. Pracujeme na tom, aby mohol byť náš priestor využívaný efektívnejšie.',
        // 'Progressbar presents… Sme vďační za každý event, avšak niekedy chceme reagovať na to, čo vnímame ako potrebné. Vlastná dramaturgia eventov je niečo, čo si budeme môcť dovoliť, len vďaka vašej štedrosti.'
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button.is-black.is-block.is-large.meeting {
    background-image: linear-gradient(to right top, #b60cf6, #9316e5, #711ad4, #4c1ac1, #1e19ae);
  }

  .notification {
  padding: 0;
  }
  @media only screen and (max-width: 768px) {
    iframe {
      width: 85vw;
      height: 15em;
    }
  }

  h1 a {
    color:hotpink;
  }

  iframe {
    width: 100%;
  }
</style>
