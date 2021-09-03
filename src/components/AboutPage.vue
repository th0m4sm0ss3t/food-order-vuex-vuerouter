<template>
  <div class="about">
    <h1 class="title">All of our infos</h1>
    <img 
      src="https://images.pexels.com/photos/5922447/pexels-photo-5922447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      alt="Outside of the restaurant"
      class="about__img"
    >
    <div class="infos">
        <h2 class="infos__title">Food kingdom</h2>

        <div class="openings">
            <ul v-for="openInfos in openings" :key="openInfos.day">
                <li class="openings__day">{{ openInfos.day }} : 
                    <span 
                      v-if="openInfos.open === false"
                      class="openings__day__infos"
                    >
                        Closed
                    </span>
                    <span v-else class="openings__day__infos">
                        {{ openingHours }}
                    </span>
                </li>
            </ul>
        </div>

        <address class="infos__address"> 
            <p>11 Water St.<br>10001, New York (NY)</p>
            <p>011-555-101-001</p>
            <p>contact@foodkingdom.com</p>
        </address>

        <div class="logos">
            <div class="logos__disabledNeeds">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-disabled" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="11" cy="5" r="2" />
                    <polyline points="11 7 11 15 15 15 19 20" />
                    <line x1="11" y1="11" x2="16" y2="11" />
                    <path d="M7 11.5a5 5 0 1 0 6 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ear-off" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 10c0 -1.146 .277 -2.245 .78 -3.219m1.792 -2.208a7 7 0 0 1 10.428 9.027a10 10 0 0 1 -.633 .762m-2.045 1.96a8 8 0 0 0 -1.322 2.278a4.5 4.5 0 0 1 -6.8 1.4" />
                    <path d="M11.42 7.414a3 3 0 0 1 4.131 4.13" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                </svg>
            </div>
            <div class="logos__moneyAccepted">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                    <path d="M12 6v2m0 8v2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-credit-card" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#171515" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <line x1="7" y1="15" x2="7.01" y2="15" />
                    <line x1="11" y1="15" x2="13" y2="15" />
                </svg>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  created () {
    document.title = "About";
  },
  data () {
    return {
        openings: [
            {
                day: "Monday",
                open: false, 
            },
            {
                day: "Tuesday",
                open: true, 
            },
            {
                day: "Wednesday",
                open: true, 
            },
            {
                day: "Thursday",
                open: true, 
            },
            {
                day: "Friday",
                open: true, 
            },
            {
                day: "Saturday",
                open: true, 
            },
            {
                day: "Sunday",
                open: true, 
            }
        ],
        openingHours: "9 am - 23 pm"
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/css/vars.scss';
@import '@/css/reset.scss';

.about {
  padding: $gutter * 3 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__img {
    margin: $gutter * 3 0;
  }
}

.title {
  text-align: center;
  font-family: $titleFont;
  font-size: $titleSize;
  width: 100%;
}

.infos {
    width: 100%;
    text-align: center;

    &__title {
      font-family: $titleFont;
      font-size: 1.2rem;
    }


    &__address p {
        margin: 0.5rem 0;
    }
}

.openings {
    width: 75%;
    border: solid 2px $yellow;
    border-radius: 5px;
    background: $yellow;
    margin: $gutter auto;
    padding: $gutter 0;

    &__day {
      margin: 0.5rem 0;
      font-weight: 600;

      &__infos {
        font-weight: normal;
      }
    }
}

.logos{
    width: 75%;
    border: solid 2px $yellow;
    border-radius: 5px;
    background: $yellow;
    margin: $gutter auto;
    padding: $gutter 0;
    display: flex;
    justify-content: center;

    &__disabledNeeds, &__moneyAccepted {
        margin: 0 0.5rem;
    }
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .about {
    &__img {
      width: 75%;
    }
  }
}

/* Medium screen */
@media only screen and (min-width: 801px) {
 .about {
    &__img {
      width: 75%;
    }
  }
}

/* Big screen */
@media only screen and (min-width: 1500px) {

}
</style>
