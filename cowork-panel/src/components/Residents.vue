<template>
<div class="residents">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/eventspace/mlmu_april.jpg" alt="progressbar cowork bratislava blockchain">
        </figure>
      </article>
    </div>
  </div>
  <div class="columns">
    <div class="column is-12">
      <article class="tile is-child notification is-black is-size-4">
        <p class="title">Selected Residents at Progressbar Family Office
        <p class="title">Crypto Startups</p>

        <div class="columns">
          <div class="column is-4" v-for="r in residents.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt"><br>{{r.name}}</a>
            {{r.desc}}
          </div>
        </div>
        <p class="title">Technology Meetups</p>
        <div class="columns">
          <div class="column is-4" v-for="r in meetups.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt"><br>{{r.name}}</a>
            {{r.desc}}
          </div>
        </div>
        <div class="columns">
          <div class="column is-4" v-for="r in meetups.slice(3,6)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt"><br>{{r.name}}</a>
            {{r.desc}}
          </div>
        </div>
        <p class="title">Social Impact</p>
        <div class="columns">
          <div class="column is-4" v-for="r in ngoResidents.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.alt"><br>{{r.name}}</a>
            {{r.desc}}
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
</template>
<script>
import ImageFrame from './ImageFrame';

export default {
  components: {
    ImageFrame
  },
  name: 'residents',
  data() {
    return {
      href: {
        coworkGroup: 'https://t.me/coworkprogressbar'
      },
      residents: [
        {
          name: 'CrypKit',
          src: '/static/img/residents/crypkit-transparent.png',
          url: 'https://www.crypkit.com/',
          desc: 'Portfolio tracking and analytics web app for crypto markets. Focus on making better investment decisions. We take care of the rest.'
        },
        {
          name: 'BlockUnison',
          src: '/static/img/residents/blockunison.svg',
          url: 'https://blockunison.com/',
          desc: 'DEVELOPERS AND PIONEERS IN BLOCKCHAIN. We are a gateway for startups and larger enterprises that need Solidity Smart Contracts and crypto expertise'
        },
        {
          name: 'NKB Group',
          src: '/static/img/residents/nkb_group.png',
          url: 'http://www.nkbgroup.io/',
          desc: 'Investment banking for the digital world. NKB operates as a full-service investment bank focused on blockchain technology. We are a one-stop solution for our clients - opening the new world of crypto assets and delivering it via the best practices of traditional finance.'
        }
      ],
      ngoResidents: [
        {
          name: 'Pre Stredoskolakov',
          src: '/static/img/residents/pre_stredoskolakov.jpg',
          url: 'http://prestredoskolakov.sk/',
          desc: 'Vznikli sme v roku 2012 na Gymnáziu C. S. Lewisa v Bratislave; dnes sme tím zo škôl po celom Slovensku. Zbierame ponuky a informácie o eventoch či štipendiách a zhromažďujeme ich na našej platforme. Organizujeme rôzne eventy či vzdelávacie programy pre stredoškolákov a podnecujeme ich k aktívnemu prístupu v spoločnosti. Veríme, že cez účasť na týchto eventoch a počas štúdia v zahraničí študenti naberú skúsenosti, ktoré budú môcť aplikovať na Slovensku.'
        },
        {
          name: 'Cyklokoalicia',
          src: '/static/img/residents/cyklokoalicia_logo.svg',
          url: 'https://cyklokoalicia.sk/',
          desc: 'Rozvoj cyklistickej a pešej dopravy'
        },
        {
          name: 'Rada mládeže Bratislavského kraja',
          src: '/static/img/residents/rmbrk.png',
          url: 'http://rmbrk.sk',
          desc: 'Rada mládeže Bratislavského kraja...aby každý mladý človek mal hlas'
        },
        {
          name: 'Whitebikes',
          src: '/static/img/residents/WhiteBikes_Logo.svg',
          url: 'https://whitebikes.info/',
          desc: ''
        }
      ],
      meetups: [
        {
          name: 'Nodeschool Bratislava',
          src: '/static/img/residents/nodeschool-bratislava-sticker.svg',
          url: 'https://www.meetup.com/nodejsbratislava/',
          desc: 'Nodejs and learning meetup in Bratislava'
        },
        {
          name: 'Bratislava Python Meetup',
          src: '/static/img/residents/bratislava_python_meetup.jpeg',
          url: 'https://spy.pycon.sk/sk/',
          desc: 'Python Meetups & Pycon.sk organisers'
        },
        {
          name: 'Machine Learning Meetup Bratislava',
          src: '/static/img/residents/machine_learning_meetup_bratislava.jpeg',
          url: 'https://www.meetup.com/Machine-Learning-Bratislava-Meetups/',
          desc: 'Machine Learning Meetups Bratislava is a meetup for people interested in machine learning and related topics like AI, data mining, computer vision, information retrieval, natural language processing.'
        },
        {
          name: 'Open Blockchain Bratislava',
          src: '/static/img/residents/open_blockchain_bratislava.jpeg',
          url: 'https://www.meetup.com/openblockchainbratislava/',
          desc: 'Blockchain meetups in Bratislava, recently focused on Ethereum and other blockchains'
        },
        {
          name: 'PyLadies Bratislava',
          src: '/static/img/residents/pyladies_bratislava.jpg',
          url: 'https://www.facebook.com/events/384459445719332/',
          desc: 'Learning ladies to understand Python'
        },
        {
          name: 'Unreal User group Slovakia',
          src: '/static/img/residents/unreal_user_group_slovakia.jpeg',
          url: 'https://www.meetup.com/Unreal-User-Group-Slovakia/',
          desc: 'This group is for Unreal Engine users in Slovakia and surrounding countries. We plan to meet 6x per year in Bratislava and talk about all aspects related to developing games, apps, visualisations, VR in Unreal Engine 4.x'
        }
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
</style>
