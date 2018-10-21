<template>
<div class="sponsors">
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-8">
        <h1 class="title has-text-grey-light">
          Beloved & Brave Sponsors of our <a href="https://progressbar.sk"> hackerspace Progressbar</a> & <a href="https://progressbar.sk"> Cowork Progressbar</a>
        </h1>
        <img src="/static/img/tribune.jpg" alt="tribune" />
        <h2 class="subtitle">
          <ul class="has-text-grey-light">
            <br />
            <li>
               <a href="https://dcore.decent.ch" target="_blank">DCore</a><br />Blockchain you can actually build on. Innovative and customizable adaptation of blockchain technology allows you to mix and match DCore components to further your own projects.
            </li>
            <br />
            <li>
              <a href="https://decent.ch" target="_blank">DECENT</a><br /> is a Blockchain Content Distribution Platform that is Open-Source and utilizes Blockchain to ensure trust and security. Our intention is to revolutionize data distribution on the Internet.
            </li>
            <br />
            <li>
              <a href="https://www.bitpanther.com" target="_blank">BitPanther</a><br /> is a European financial technology platform focused on helping people to get access to digital currencies. BitPanther is a registered Slovakian company, compliant with Slovak and EU regulations.
            </li>
            <br />
            <li>
              <a href="http://www.hosu.sk/en/home.html" target="_blank">HOSU | Office Solutions is a specialist in complex office solutions.</a>
                We deal with analysis, design and furnishing of administrative spaces.
                Our aim is to effectively use the space of an organization and create a friendly workspace in which people work more efficiently and enthusiastically. Our approach focuses primarily on proper acoustics, ergonomics and sustainability.
                The result of our work is a functional design and comfortable workplace.
            </li>
            <br />
            <li>
              <a href="https://wy.sk" target="_blank">wy</a><br /> We are your dream hoster, and your best choice for doing business on internet. We provide hosting to company websites, e-shops, blogs, huge portals or private presentations. We welcome individuals and freelancers, small teams and running businesses.
            </li>
            <br />
            <li>
              <a href="https://progressbar.sk">your favourite company can be here</a>
            </li>
          </ul>
        </h2>
        <p class="has-text-grey-light">
          Want to sponsor us? Your name will be known in our hackerspace & cowork. We hosted 700+ technical and technological events so far.
          We can give you huge marketing push or find you geeks, engineers, software developers you are searching for.
          We are their daily place, where their come hangout on evenings or work during day.
        </p>
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
      seats: {
        subscribers: 0,
        capacity: 0
      },
      credited: 0,
      orderSum: {},
      newSubscriber: {
        email: ''
      },
      button: {
        subscribe: 'Register for cowork',
        verify: '__',
        login: 'Send login link',
        order: 'Go to Dashboard'
      },
      daysBooked: 0,
      subEmail: '',
      isUser: false,
      config: {
        baseWebUrl: 'https://progressbar.sk/',
        orderPrices: {
          day: 4,
          month: 80,
          fix: 160,
          locker: 10,
          nonstop: 20
        },
        openHours: {
          monthPass: {
            start: 6,
            end: 18
          },
          dayPass: {
            start: 9,
            end: 18
          }
        },
        coworkLogin: false,
        coworkSubscribe: false
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
