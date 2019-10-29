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
        <p class="title">Selected Residents at Progressbar Family Office<p/>
        <p class="title">Crypto Startups</p>
        <div class="columns">
          <div class="column" v-for="r in residents.slice(0,4)">
            <a :href="r.url"><img :src="r.src" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <div class="columns">
          <div class="column" v-for="r in residents.slice(4,8)">
            <a :href="r.url"><img :src="r.src" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <p class="title">Technology Meetups</p>
        <div class="columns">
          <div class="column is-4" v-for="r in meetups.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <div class="columns">
          <div class="column is-4" v-for="r in meetups.slice(3,6)">
            <a :href="r.url"><img :src="r.src" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <p class="title">Social Impact</p>
        <div class="columns">
          <div class="column is-4" v-for="r in ngoResidents.slice(0,3)">
            <a :href="r.url"><img :src="r.src" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
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
          name: 'BlockUnison',
          src: '/static/img/residents/blockunison.svg',
          url: 'https://blockunison.com/',
          desc: 'DEVELOPERS AND PIONEERS IN BLOCKCHAIN. We are a gateway for startups and larger enterprises that need Solidity Smart Contracts and crypto expertise'
        },
        {
          name: 'FullnodeTECH',
          src: '/static/img/residents/fullnodetech.jpg',
          url: 'https://www.fullnode.tech/',
          desc: 'Provides asset agnostic blockchain infrastructure operation of Proof of Work, Proof of Stake, Delegated Proof of Stake and hybrid blockchain consensus protocols'
        },
        {
          name: 'Zee Prime Capital',
          src: '/static/img/residents/zeeprime_capital.png',
          url: 'https://zeeprime.capital/',
          desc: 'Investment firm. Crypto. Collaborative intelligence. Coordination games. You name it.'
        },
        {
          name: 'Substrate Marketplace',
          src: '/static/img/residents/substratemarketplace.svg',
          url: 'https://substratemarketplace.com/',
          desc: 'Market of Substrate modules for building any blockchain',
        },
        {
          name: 'vue-polkadot.js.org',
          src: '/static/img/residents/polkadot_vuejs.png',
          url: 'https://vue-polkadot.js.org/',
          desc: 'VueJS utilities, libraries and Vue components in use across @polkadot projects'
        },
        {
          name: 'CrypKit',
          src: '/static/img/residents/crypkit-transparent.png',
          url: 'https://www.crypkit.com/',
          desc: 'Portfolio tracking and analytics web app for crypto markets. Focus on making better investment decisions. We take care of the rest.'
        },
        {
          name: 'Fellowship of Ethereum Magicians',
          src: '/static//img/residents/ethereum-magicians.png',
          url: 'https://ethereum-magicians.org/',
          desc: 'Is a community of individuals who are collaborating to make to make Ethereum the best it can be.'
        },
        {
          name: 'PolkAlert',
          src: '/static/img/residents/polkalert.svg',
          url: 'https://polkalert.com/',
          desc: 'Node monitoring for Validators of Polkadot network'
        },

      ],
      ngoResidents: [
        {
          name: 'Pre Stredoskolakov',
          src: '/static/img/residents/pre_stredoskolakov.jpg',
          url: 'http://prestredoskolakov.sk/',
          desc: 'a nonprofit organization operating in Slovakia run by students. We provide information for Slovak students on opportunities that are available and relevant for them. That is why we also organize a Leadership Programme, a Buddy programme and most importantly, are not scared of  big projects like the nation-wide Student Elections.'
        },
        {
          name: 'Cyklokoalicia',
          src: '/static/img/residents/cyklokoalicia_logo.svg',
          url: 'https://cyklokoalicia.sk/',
          desc: 'is a non-profit advocacy expert group that aims to improve bicycle infrastructure in Bratislava and all over Slovakia. We also cover needs of pedestrians and support quality public spaces.'
        },
        {
          name: 'Rada mládeže Bratislavského kraja',
          src: '/static/img/residents/rmbrk.png',
          url: 'http://rmbrk.sk',
          desc: 'The Youth Council (YC) platform connects children- and youth organizations, self-governing student councils, youth leaders, youth workers, youth researchers and other professionals in the field of youth work in the Bratislava Region.'
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
          name: 'Unreal User group Slovakia',
          src: '/static/img/residents/unreal_user_group_slovakia.jpeg',
          url: 'https://www.meetup.com/Unreal-User-Group-Slovakia/',
          desc: 'This group is for Unreal Engine users in Slovakia and surrounding countries. We plan to meet 6x per year in Bratislava and talk about all aspects related to developing games, apps, visualisations, VR in Unreal Engine 4.x'
        },
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
          name: 'PyLadies Bratislava',
          src: '/static/img/residents/pyladies_bratislava.jpg',
          url: 'https://www.facebook.com/events/384459445719332/',
          desc: 'Learning ladies to understand Python'
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
