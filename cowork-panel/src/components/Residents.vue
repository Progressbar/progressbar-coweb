<template>
<div class="residents">
  <div class="tile is-ancestor">
    <div class="tile is-parent is-12">
      <article class="tile is-child">
        <figure class="image">
          <img src="/static/img/eventspace/mlmu_december.jpg" alt="progressbar coworking bratislava blockchain">
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
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <div class="columns">
          <div class="column" v-for="r in residents.slice(4,8)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <p class="title">Exponential Technologies</p>
        <div class="columns">
          <div class="column" v-for="r in exponentialResidents.slice(0,4)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <p class="title">Technology Meetups</p>
        <div class="columns">
          <div class="column is-4" v-for="r in meetups.slice(0,3)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <div class="columns">
          <div class="column is-3" v-for="r in meetups.slice(3,7)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <p class="title">Social Impact</p>
        <div class="columns">
          <div class="column is-4" v-for="r in ngoResidents.slice(0,3)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
            <br>{{r.desc}}
          </div>
        </div>
        <div class="columns">
          <div class="column is-3" v-for="r in ngoResidents.slice(3,7)">
            <a :href="r.url"><img :src="`/static/img/residents/${r.src}`" :alt="r.name"><br>{{r.name}}</a>
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
  metaInfo: {
    title: 'Coworkers and Residents | Blockchain'
  },
  data() {
    return {
      href: {
        coworkGroup: 'https://t.me/coworkprogressbar'
      },
      residents: [
        {
          name: 'Zee Prime Capital',
          src: 'zeeprime_capital.png',
          url: 'https://zeeprime.capital/',
          desc: 'Investment firm. Crypto. Collaborative intelligence. Coordination games. You name it.'
        },
        {
          name: 'vue-polkadot.js.org',
          src: 'polkadot_vuejs.png',
          url: 'https://vue-polkadot.js.org/',
          desc: 'VueJS utilities, libraries and Vue components in use across Polkadot/Substrate projects'
        },
        {
          name: 'Fellowship of Ethereum Magicians',
          src: 'ethereum-magicians.png',
          url: 'https://ethereum-magicians.org/',
          desc: 'Is a community of individuals who are collaborating to make to make Ethereum the best it can be.'
        },
        {
          name: 'BlockUnison',
          src: 'blockunison.svg',
          url: 'https://blockunison.com/',
          desc: 'NEXT LEVEL BLOCKCHAIN DEVELOPMENT. Deliver blockchain solutions with Substrate framework and Solidity smart contracts'
        },
        {
          name: 'CrypKit',
          src: 'crypkit-transparent.png',
          url: 'https://www.crypkit.com/',
          desc: 'Portfolio tracking and analytics web app for crypto markets. Focus on making better investment decisions. We take care of the rest.'
        },
        {
          name: 'PolkAlert',
          src: 'polkalert.svg',
          url: 'https://polkalert.com/',
          desc: 'Node monitoring for Validators of Polkadot network'
        },
        {
          name: 'Substrate Marketplace',
          src: 'substratemarketplace.svg',
          url: 'https://substratemarketplace.com/',
          desc: 'Market of Substrate modules for building any blockchain',
        },
        {
          name: 'StarMesh',
          src: 'starmesh_hexlogo.png',
          url: 'https://starmesh.xyz/',
          desc: '🛰🌍 Earth Observation meta-vehicle. Cryptographically verifiable and distributed data layer. Rich spatial data from various sources, all from one convenient location.'
        },
      ],
      exponentialResidents: [
        {
          name: 'Filamentum | addi(c)tive polymers',
          src: 'filamentum.png',
          url: 'https://fillamentum.com/',
          desc: 'Fillamentum is a brand name of TOP quality filaments for 3D printing. Our development is powered by real experts with more than 15 years of experience in the plastics industry.  We are focusing on guaranteed Fillamentum quality and bringing new trends and materials.'
        },
        {
          name: 'Represent',
          src: 'repesent_wordmark_white.png',
          url: 'https://represent.com/',
          desc: 'Represent is a crowd-selling platform that enables anyone to create and sell custom merchandise with no upfront costs.'
        }
      ],
      ngoResidents: [
        {
          name: 'Pre Stredoskolakov',
          src: 'pre_stredoskolakov.jpg',
          url: 'http://prestredoskolakov.sk/',
          desc: 'a nonprofit organization operating in Slovakia run by students. We provide information for Slovak students on opportunities that are available and relevant for them. That is why we also organize a Leadership Programme, a Buddy programme and most importantly, are not scared of  big projects like the nation-wide Student Elections.'
        },
        {
          name: 'Rada mládeže Bratislavského kraja',
          src: 'rmbrk.png',
          url: 'http://rmbrk.sk',
          desc: 'The Youth Council (YC) platform connects children- and youth organizations, self-governing student councils, youth leaders, youth workers, youth researchers and other professionals in the field of youth work in the Bratislava Region.'
        },
        {
          name: 'QuickKancle',
          src: 'QuickKancle_Logo_C_W.webp',
          url: 'https://www.quickkancle.com/',
          desc: '',
        },
        {
          name: 'TEDxYouth@Bratislava',
          src: 'logotedxblack-5.png',
          url: 'http://www.tedxyouthbratislava.com/',
          desc: '',
        },
        {
          name: 'Zmudri',
          src: 'Zmudri logo.webp',
          url: 'http://www.zmudri.sk/',
          desc: '',
        },
        {
          name: 'EduEra',
          src: 'logo_priehladne.webp',
          url: 'http://www.eduera.sk/',
          desc: '',
        },
        {
          name: 'Young&Eco',
          src: 'young and eco.webp',
          url: 'http://www.zmenajenanas.com/',
          desc: '',
        }
      ],
      meetups: [
        {
          name: 'Machine Learning Meetup Bratislava',
          src: 'machine_learning_meetup_bratislava.jpeg',
          url: 'https://www.meetup.com/Machine-Learning-Bratislava-Meetups/',
          desc: 'Machine Learning Meetups Bratislava is a meetup for people interested in machine learning and related topics like AI, data mining, computer vision, information retrieval, natural language processing.'
        },
        {
          name: 'CodeBeer Bratislava',
          src: 'code_beer_meetups.png',
          url: 'https://www.facebook.com/codebeer.sk/',
          desc: 'Meetups around various programming languages with newcomers and experienced developers looking to chat and exchange knowledge'
        },
        {
          name: 'Open Blockchain Bratislava',
          src: 'open_blockchain_bratislava.jpeg',
          url: 'https://www.meetup.com/openblockchainbratislava/',
          desc: 'Blockchain meetups in Bratislava, recently focused on Ethereum and other blockchains'
        },
        {
          name: 'Unreal User group Slovakia',
          src: 'unreal_user_group_slovakia.jpeg',
          url: 'https://www.meetup.com/Unreal-User-Group-Slovakia/',
          desc: 'This group is for Unreal Engine users in Slovakia and surrounding countries. We plan to meet 6x per year in Bratislava and talk about all aspects related to developing games, apps, visualisations, VR in Unreal Engine 4.x'
        },
        {
          name: 'Nodeschool Bratislava',
          src: 'nodeschool-bratislava-sticker.svg',
          url: 'https://www.meetup.com/nodejsbratislava/',
          desc: 'Nodejs and learning meetup in Bratislava'
        },
        {
          name: 'Bratislava Python Meetup',
          src: 'bratislava_python_meetup.jpeg',
          url: 'https://spy.pycon.sk/sk/',
          desc: 'Python Meetups & Pycon.sk organisers'
        },
        {
          name: 'PyLadies Bratislava',
          src: 'pyladies_bratislava.jpg',
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
