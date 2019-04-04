<template>
<div class="sponsors">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-8">
        <article class="tile is-child notification is-black is-size-5">
          <p class="title">Beloved & Brave Sponsors of our <a href="https://cowork.progressbar.sk"> hackerspace Progressbar</a> & <a href="https://cowork.progressbar.sk"> Cowork Progressbar</a><p/>
          <div class="columns">
            <div class="column is-4" v-for="r in sponsors.slice(0,3)">
              <a :href="r.url"><img :src="r.src" :alt="r.alt"><br>{{r.name}}</a>
              {{r.desc}}
            </div>
          </div>
          <p class="title">Medial Partners</p>
          <div class="columns">
            <div class="column is-4" v-for="r in mediaPartners.slice(0,3)">
              <a :href="r.url"><img :src="r.src" :alt="r.alt"><br>{{r.name}}</a>
              {{r.desc}}
            </div>
          </div>
          <p class="has-text-grey-light is-size-4">
            Want to sponsor us? Your name will be known in our hackerspace & cowork. We hosted 700+ technical and technological events so far.
            We can give you huge marketing push or find you geeks, engineers, software developers you are searching for.
            We are their daily place, where their come hangout on evenings or work during day.
          </p>
        </article>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'sponsors',
  data() {
    return {
      sponsors: [
        {
          name: 'Decent Dcore | Advanced Blockchain Ecosystem',
          src: '/static/img/partners/DECENT_logo_vertical_color.png',
          url: 'https://decent.ch/dcore/',
          desc: 'Founded in 2015, DECENT is one of the first blockchain companies. DECENT has developed their own blockchain protocol; DCore, a platform that empowers users to create or migrate applications into a blockchain environment. Cooperating closely with top investment funds and incubators, DECENT is dedicated to building an ecosystem upon its proprietary blockchain technology to help developers and businesses adapt to a decentralized future, especially within the media and entertainment industries.'
        },
        {
          name: 'HOSU | office solutions',
          src: '/static/img/sponsors/hosu.png',
          url: 'http://www.hosu.sk/en/home.html',
          desc: 'We deal with analysis, design and furnishing of administrative spaces. Our aim is to effectively use the space of an organization and create a friendly workspace in which people work more efficiently and enthusiastically. Our approach focuses primarily on proper acoustics, ergonomics and sustainability. The result of our work is a functional design and comfortable workplace.'
        },
        {
          name: 'BitPanther',
          src: '/static/img/sponsors/bitpanther.svg',
          url: 'https://www.bitpanther.com/en',
          desc: 'is a European financial technology platform focused on helping people to get access to digital currencies. BitPanther is a registered Slovakian company, compliant with Slovak and EU regulations.'
        },
      ],
      mediaPartners: [
        {
          name: 'Robime.it',
          src: '/static/img/sponsors/robime_it.jpg',
          url: 'https://robime.it',
          desc: 'Robime.it je portál pre IT ľudí, ale aj pre tých, ktorí s IT úzko spolupracujú – konzultanti, finančníci, obchodníci, personalisti, marketéri, apod. Nájdete u nás pracovné ponuky, tipy a rady ako sa ďalej posunúť v kariére a pohľad do sveta informačných technológii.'
        }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
