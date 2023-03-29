<script setup lang="ts">
import {Head} from '@inertiajs/vue3';
import {onMounted, reactive, ref} from "vue";

const wisdoms = [
    "Hidup yang keren adalah hidup yang pola pikirnya menunggu waktu ibadah sambil melakukan kemanfaatan. <br/><br/> ~Gus Baha",
    "Bersyukur itu perlu terus latihan. Jangan hanya rasa syukur hanya saat memiliki sesuatu.  <br/><br/>~Gus Baha",
    "Mencintai tidak cukup dengan tidak melukai yang dicintai. Tapi juga harus sabar saat dilukai yang dicintai.  <br/><br/>~Gus Baha",
    "Kita ini mudah mencintai orang yang berjasa dalam hidup kita, tapi kenapa tidak mudah mencintai Allah yang jasa-jasanya sangat besar dalam hidup kita.  <br/><br/>~Gus Baha",
    "Allah mengabulkan doa-doa ketika kita sudah siap, bukan ketika kita menginginkannya.  <br/><br/>~Gus Baha",
    "Kebodohan itu merusak, tapis sok pintar itu jauh lebih merusak. <br/><br/>~Gus Baha",
    "Salah satu keburukan manusia adalah membawa-bawa nama Allah untuk kepentingan dirinya, seolah-olah apa yang dipikirannya sesuai dengan kehendak Allah. <br/><br/>~Gus Baha",
    "Cinta mungkin terkadang membuatmu rapuh, tetapi berterima kasihlah kepadanya, karena cinta darinya bisa membuatmu lebih kuat dari sebelumnya. <br/><br/>~Gus Baha",
    "Kita harus curiga dengan otak dan pikiran kita.  <br/><br/>~Gus Baha",
    "Salah satu kebiasaan buruk manusia ialah suka membawa-bawa nama Allah untuk kepentingan dirinya, seolah-olah apa yang ada dipikirannya selalu sesuai dengan yang dikehendaki oleh Allah. <br/><br/>~Gus Baha",
    "Untuk memperbaiki manusia itu butuh proses, tidak bisa langsung dihabisi. Jika tugas kenabian hanya untuk menghabisi keburukan, tentu bermitra dengan Izrail jauh lebih efektif ketimbang bermitra dengan Jibril.  <br/><br/>~Gus Baha",
    "Barang siapa belajar tanpa guru, maka gurunya adalah setan.  <br/><br/>~Gus Baha",
    "Kalau malaikat datang dan memberitahu saya bahwa kelak saya akan masuk neraka selamanya, apakah saya akan berhenti menyembah Tuhan? Tidak. Saya akan terus menyembah Tuhan.  <br/><br/>~Gus Baha",
    "Sebesar apapun dosa seseorang, tidak ada yang berhak menghalangi rasa cinta hamba pada Tuhannya, meski cara yang digunakan untuk menunjukkan rasa cinta itu terasa aneh di mata kita.  <br/><br/>~Gus Baha",
    "Jangan membenci orang yang sedang kafir saat ini, bisa saja suatu saat orang tersebutlah yang mensyafaati kamu. Tirulah Kanjeng Nabi Muhammad SAW yang berdoa kepada Allah SWT untuk Sayyidina Umar Bin Khatab yang saat itu sedang kafir  <br/><br/>~Gus Baha",
    "Yang abadi adalah yang kita sedekahkan. <br/><br/>~Gus Baha",
    "Kebodohan itu merusak, tetapi merasa dirinya paling pintar lebih merusak.  <br/><br/>~Gus Baha",
    "Sering kali kita mengabaikan hal-hal kecil, padahal dari sanalah sesuatu yang besar lahir dan tumbuh.  <br/><br/>~Gus Baha",
    "Sebuah langkah kecil merupakan sebuah awal yang begitu panjang.   <br/><br/>~Gus Baha",
    "Terkadang, mungkin Allah membuat hamba-Nya merasa kecewa, namun percayalah Ia hanya ingin engkau kembali berharap hanya kepada-Nya. <br/><br/>~Gus Baha",
    "Saat kamu merasa tidak ada orang yang berada di pihakmu, tenanglah karena Allah selalu bersamamu. <br/><br/>~Gus Baha",
    "Jangan pernah putus asa saat merasa dalam kesulitan, sebab Allah menyertakan kemudahan setelah kesulitan. <br/><br/>~Gus Baha",
    "Allah akan mengganti semua luka yang pernah engkau rasakan dengan kebahagiaan yang tak pernah terduga. <br/><br/>~Gus Baha",
    "Terkadang, mungkin Allah membuat hamba-Nya merasa kecewa, namun percayalah Ia hanya ingin engkau kembali berharap hanya kepada-Nya. <br/><br/>~Gus Baha",
    "Allah tidak pernah ingkar pada hamba-Nya, meski sekecil biji Zarrah pun janji Allah selalu ditepati. <br/><br/>~Gus Baha",
    "Saat kamu merasa tidak ada orang yang berada dipihakmu, tenanglah karena Allah selalu bersamamu. <br/><br/>~Gus Baha",
    "Sering kali kita mengabaikan hal-hal kecil, padahal dari sanalah sesuatu yang besar lahir dan tumbuh. <br/><br/>~Gus Baha",
    "Harapan dan keinginan ini seharusnya sejalan. Ya sejalan dengan betapa besar usaha yang Kamu lakukan dalam mewujudkannya.  <br/><br/>~Gus Baha",
    "Untuk menjadi yang terbaik. Kamu harus mempunyai mimpi yang besar serta semangat untuk mewujudkannya. <br/><br/>~Gus Baha",
    "Seberapa besar pengorbanan yang ia lakukan, maka dari situlah kita akan tahu betapa besar cintanya kepadamu. <br/><br/>~Gus Baha",
    "Cinta mungkin terkadang membuatmu rapuh, tetapi berterima kasihlah kepadanya, karena cinta darinya bisa membuatmu lebih kuat dari sebelumnya. <br/><br/>~Gus Baha",
    "Dosa terbesar istri adalah Nggoblokno suami.  <br/><br/>~Gus Baha",
    "Di akhirat, kenangan yang paling indah di dunia adalah, seberapa sering kita sujud kepada Allah SWT. <br/><br/>~Gus Baha",
    "Tak masalah saat ini kamu miskin. Bisa jadi itu alasan Allah kelak untuk membawamu ke surga-Nya. <br/><br/>~Gus Baha",
]

let today = ref(new Date())
const form = reactive({
    user: {
        username: null,
        password: null,
    },
    wisdomIndex: Math.floor(Math.random() * wisdoms.length)
})
let data = ref({times: null})
let dialog = reactive({
    info: false
})
let inputData = reactive({
    lat:-7.3454047,
    lng:110.5112326,
    elevation:754
})
function randomize() {
    form.wisdomIndex = Math.floor(Math.random() * wisdoms.length)
}


function PrayTimes(method) {


    //------------------------ Constants --------------------------
    var

        // Time Names
        timeNames = {
            imsak: 'Imsak',
            fajr: 'Subuh',
            sunrise: 'Terbit',
            dhuhr: 'Dzuhur',
            asr: 'Asar',
            sunset: 'Terbenam',
            maghrib: 'Maghrib',
            isha: 'Isya',
            midnight: 'Tengah Malam'
        },


        // Calculation Methods
        methods = {
            MWL: {
                name: 'Muslim World League',
                params: {fajr: 18, isha: 17}
            },
            ISNA: {
                name: 'Islamic Society of North America (ISNA)',
                params: {fajr: 15, isha: 15}
            },
            Egypt: {
                name: 'Egyptian General Authority of Survey',
                params: {fajr: 19.5, isha: 17.5}
            },
            Makkah: {
                name: 'Umm Al-Qura University, Makkah',
                params: {fajr: 18.5, isha: '90 min'}
            },  // fajr was 19 degrees before 1430 hijri
            Karachi: {
                name: 'University of Islamic Sciences, Karachi',
                params: {fajr: 18, isha: 18}
            },
            Tehran: {
                name: 'Institute of Geophysics, University of Tehran',
                params: {fajr: 17.7, isha: 14, maghrib: 4.5, midnight: 'Jafari'}
            },  // isha is not explicitly specified in this method
            Jafari: {
                name: 'Shia Ithna-Ashari, Leva Institute, Qum',
                params: {fajr: 16, isha: 14, maghrib: 4, midnight: 'Jafari'}
            }
        },


        // Default Parameters in Calculation Methods
        defaultParams = {
            maghrib: '0 min', midnight: 'Standard'

        },


        //----------------------- Parameter Values ----------------------
        /*

        // Asr Juristic Methods
        asrJuristics = [
            'Standard',    // Shafi`i, Maliki, Ja`fari, Hanbali
            'Hanafi'       // Hanafi
        ],


        // Midnight Mode
        midnightMethods = [
            'Standard',    // Mid Sunset to Sunrise
            'Jafari'       // Mid Sunset to Fajr
        ],


        // Adjust Methods for Higher Latitudes
        highLatMethods = [
            'NightMiddle', // middle of night
            'AngleBased',  // angle/60th of night
            'OneSeventh',  // 1/7th of night
            'None'         // No adjustment
        ],


        // Time Formats
        timeFormats = [
            '24h',         // 24-hour format
            '12h',         // 12-hour format
            '12hNS',       // 12-hour format with no suffix
            'Float'        // floating point number
        ],
        */


        //---------------------- Default Settings --------------------

        calcMethod = 'MWL',

        // do not change anything here; use adjust method instead
        setting = {
            imsak: '10 min',
            dhuhr: '0 min',
            asr: 'Standard',
            highLats: 'NightMiddle'
        },

        timeFormat = '24h',
        timeSuffixes = ['am', 'pm'],
        invalidTime = '-----',

        numIterations = 1,
        offset = {},


        //----------------------- Local Variables ---------------------

        lat, lng, elv,       // coordinates
        timeZone, jDate;     // time variables


    //---------------------- Initialization -----------------------


    // set methods defaults
    var defParams = defaultParams;
    for (var i in methods) {
        var params = methods[i].params;
        for (var j in defParams)
            if ((typeof (params[j]) == 'undefined'))
                params[j] = defParams[j];
    }
    ;

    // initialize settings
    calcMethod = methods[method] ? method : calcMethod;
    var params = methods[calcMethod].params;
    for (var id in params)
        setting[id] = params[id];

    // init time offsets
    for (var i in timeNames)
        offset[i] = 0;


    //----------------------- Public Functions ------------------------
    return {


        // set calculation method
        setMethod: function (method) {
            if (methods[method]) {
                this.adjust(methods[method].params);
                calcMethod = method;
            }
        },


        // set calculating parameters
        adjust: function (params) {
            for (var id in params)
                setting[id] = params[id];
        },


        // set time offsets
        tune: function (timeOffsets) {
            for (var i in timeOffsets)
                offset[i] = timeOffsets[i];
        },


        // get current calculation method
        getMethod: function () {
            return calcMethod;
        },

        // get current setting
        getSetting: function () {
            return setting;
        },

        // get current time offsets
        getOffsets: function () {
            return offset;
        },

        // get default calc parametrs
        getDefaults: function () {
            return methods;
        },


        // return prayer times for a given date
        getTimes: function (date, coords, timezone, dst, format) {
            lat = 1 * coords[0];
            lng = 1 * coords[1];
            elv = coords[2] ? 1 * coords[2] : 0;
            timeFormat = format || timeFormat;
            if (date.constructor === Date)
                date = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
            if (typeof (timezone) == 'undefined' || timezone == 'auto')
                timezone = this.getTimeZone(date);
            if (typeof (dst) == 'undefined' || dst == 'auto')
                dst = this.getDst(date);
            timeZone = 1 * timezone + (1 * dst ? 1 : 0);
            jDate = this.julian(date[0], date[1], date[2]) - lng / (15 * 24);

            return this.computeTimes();
        },


        // convert float time to the given format (see timeFormats)
        getFormattedTime: function (time, format, suffixes) {
            if (isNaN(time))
                return invalidTime;
            if (format == 'Float') return time;
            suffixes = suffixes || timeSuffixes;

            time = DMath.fixHour(time + 0.5 / 60);  // add 0.5 minutes to round
            var hours = Math.floor(time);
            var minutes = Math.floor((time - hours) * 60);
            var suffix = (format == '12h') ? suffixes[hours < 12 ? 0 : 1] : '';
            var hour = (format == '24h') ? this.twoDigitsFormat(hours) : ((hours + 12 - 1) % 12 + 1);
            return hour + ':' + this.twoDigitsFormat(minutes) + (suffix ? ' ' + suffix : '');
        },


        //---------------------- Calculation Functions -----------------------


        // compute mid-day time
        midDay: function (time) {
            var eqt = this.sunPosition(jDate + time).equation;
            var noon = DMath.fixHour(12 - eqt);
            return noon;
        },


        // compute the time at which sun reaches a specific angle below horizon
        sunAngleTime: function (angle, time, direction) {
            var decl = this.sunPosition(jDate + time).declination;
            var noon = this.midDay(time);
            var t = 1 / 15 * DMath.arccos((-DMath.sin(angle) - DMath.sin(decl) * DMath.sin(lat)) /
                (DMath.cos(decl) * DMath.cos(lat)));
            return noon + (direction == 'ccw' ? -t : t);
        },


        // compute asr time
        asrTime: function (factor, time) {
            var decl = this.sunPosition(jDate + time).declination;
            var angle = -DMath.arccot(factor + DMath.tan(Math.abs(lat - decl)));
            return this.sunAngleTime(angle, time);
        },


        // compute declination angle of sun and equation of time
        // Ref: http://aa.usno.navy.mil/faq/docs/SunApprox.php
        sunPosition: function (jd) {
            var D = jd - 2451545.0;
            var g = DMath.fixAngle(357.529 + 0.98560028 * D);
            var q = DMath.fixAngle(280.459 + 0.98564736 * D);
            var L = DMath.fixAngle(q + 1.915 * DMath.sin(g) + 0.020 * DMath.sin(2 * g));

            var R = 1.00014 - 0.01671 * DMath.cos(g) - 0.00014 * DMath.cos(2 * g);
            var e = 23.439 - 0.00000036 * D;

            var RA = DMath.arctan2(DMath.cos(e) * DMath.sin(L), DMath.cos(L)) / 15;
            var eqt = q / 15 - DMath.fixHour(RA);
            var decl = DMath.arcsin(DMath.sin(e) * DMath.sin(L));

            return {declination: decl, equation: eqt};
        },


        // convert Gregorian date to Julian day
        // Ref: Astronomical Algorithms by Jean Meeus
        julian: function (year, month, day) {
            if (month <= 2) {
                year -= 1;
                month += 12;
            }
            ;
            var A = Math.floor(year / 100);
            var B = 2 - A + Math.floor(A / 4);

            var JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5;
            return JD;
        },


        //---------------------- Compute Prayer Times -----------------------


        // compute prayer times at given julian date
        computePrayerTimes: function (times) {
            times = this.dayPortion(times);
            var params = setting;

            var imsak = this.sunAngleTime(this.eval(params.imsak), times.imsak, 'ccw');
            var fajr = this.sunAngleTime(this.eval(params.fajr), times.fajr, 'ccw');
            var sunrise = this.sunAngleTime(this.riseSetAngle(), times.sunrise, 'ccw');
            var dhuhr = this.midDay(times.dhuhr);
            var asr = this.asrTime(this.asrFactor(params.asr), times.asr);
            var sunset = this.sunAngleTime(this.riseSetAngle(), times.sunset);
            ;
            var maghrib = this.sunAngleTime(this.eval(params.maghrib), times.maghrib);
            var isha = this.sunAngleTime(this.eval(params.isha), times.isha);

            return {
                imsak: imsak, fajr: fajr, sunrise: sunrise, dhuhr: dhuhr,
                asr: asr, sunset: sunset, maghrib: maghrib, isha: isha
            };
        },


        // compute prayer times
        computeTimes: function () {
            // default times
            var times = {
                imsak: 5, fajr: 5, sunrise: 6, dhuhr: 12,
                asr: 13, sunset: 18, maghrib: 18, isha: 18
            };

            // main iterations
            for (var i = 1; i <= numIterations; i++)
                times = this.computePrayerTimes(times);

            times = this.adjustTimes(times);

            // add midnight time
            times.midnight = (setting.midnight == 'Jafari') ?
                times.sunset + this.timeDiff(times.sunset, times.fajr) / 2 :
                times.sunset + this.timeDiff(times.sunset, times.sunrise) / 2;

            times = this.tuneTimes(times);
            return this.modifyFormats(times);
        },


        // adjust times
        adjustTimes: function (times) {
            var params = setting;
            for (var i in times)
                times[i] += timeZone - lng / 15;

            if (params.highLats != 'None')
                times = this.adjustHighLats(times);

            if (this.isMin(params.imsak))
                times.imsak = times.fajr - this.eval(params.imsak) / 60;
            if (this.isMin(params.maghrib))
                times.maghrib = times.sunset + this.eval(params.maghrib) / 60;
            if (this.isMin(params.isha))
                times.isha = times.maghrib + this.eval(params.isha) / 60;
            times.dhuhr += this.eval(params.dhuhr) / 60;

            return times;
        },


        // get asr shadow factor
        asrFactor: function (asrParam) {
            var factor = {Standard: 1, Hanafi: 2}[asrParam];
            return factor || this.eval(asrParam);
        },


        // return sun angle for sunset/sunrise
        riseSetAngle: function () {
            //var earthRad = 6371009; // in meters
            //var angle = DMath.arccos(earthRad/(earthRad+ elv));
            var angle = 0.0347 * Math.sqrt(elv); // an approximation
            return 0.833 + angle;
        },


        // apply offsets to the times
        tuneTimes: function (times) {
            for (var i in times)
                times[i] += offset[i] / 60;
            return times;
        },


        // convert times to given time format
        modifyFormats: function (times) {
            for (var i in times)
                times[i] = this.getFormattedTime(times[i], timeFormat);
            return times;
        },


        // adjust times for locations in higher latitudes
        adjustHighLats: function (times) {
            var params = setting;
            var nightTime = this.timeDiff(times.sunset, times.sunrise);

            times.imsak = this.adjustHLTime(times.imsak, times.sunrise, this.eval(params.imsak), nightTime, 'ccw');
            times.fajr = this.adjustHLTime(times.fajr, times.sunrise, this.eval(params.fajr), nightTime, 'ccw');
            times.isha = this.adjustHLTime(times.isha, times.sunset, this.eval(params.isha), nightTime);
            times.maghrib = this.adjustHLTime(times.maghrib, times.sunset, this.eval(params.maghrib), nightTime);

            return times;
        },


        // adjust a time for higher latitudes
        adjustHLTime: function (time, base, angle, night, direction) {
            var portion = this.nightPortion(angle, night);
            var timeDiff = (direction == 'ccw') ?
                this.timeDiff(time, base) :
                this.timeDiff(base, time);
            if (isNaN(time) || timeDiff > portion)
                time = base + (direction == 'ccw' ? -portion : portion);
            return time;
        },


        // the night portion used for adjusting times in higher latitudes
        nightPortion: function (angle, night) {
            var method = setting.highLats;
            var portion = 1 / 2 // MidNight
            if (method == 'AngleBased')
                portion = 1 / 60 * angle;
            if (method == 'OneSeventh')
                portion = 1 / 7;
            return portion * night;
        },


        // convert hours to day portions
        dayPortion: function (times) {
            for (var i in times)
                times[i] /= 24;
            return times;
        },


        //---------------------- Time Zone Functions -----------------------


        // get local time zone
        getTimeZone: function (date) {
            var year = date[0];
            var t1 = this.gmtOffset([year, 0, 1]);
            var t2 = this.gmtOffset([year, 6, 1]);
            return Math.min(t1, t2);
        },


        // get daylight saving for a given date
        getDst: function (date) {
            return 1 * (this.gmtOffset(date) != this.getTimeZone(date));
        },


        // GMT offset for a given date
        gmtOffset: function (date) {
            var localDate = new Date(date[0], date[1] - 1, date[2], 12, 0, 0, 0);
            var GMTString = localDate.toGMTString();
            var GMTDate = new Date(GMTString.substring(0, GMTString.lastIndexOf(' ') - 1));
            var hoursDiff = (localDate - GMTDate) / (1000 * 60 * 60);
            return hoursDiff;
        },


        //---------------------- Misc Functions -----------------------

        // convert given string into a number
        eval: function (str) {
            return 1 * (str + '').split(/[^0-9.+-]/)[0];
        },


        // detect if input contains 'min'
        isMin: function (arg) {
            return (arg + '').indexOf('min') != -1;
        },


        // compute the difference between two times
        timeDiff: function (time1, time2) {
            return DMath.fixHour(time2 - time1);
        },


        // add a leading 0 if necessary
        twoDigitsFormat: function (num) {
            return (num < 10) ? '0' + num : num;
        }

    }
}


//---------------------- Degree-Based Math Class -----------------------


var DMath = {

    dtr: function (d) {
        return (d * Math.PI) / 180.0;
    },
    rtd: function (r) {
        return (r * 180.0) / Math.PI;
    },

    sin: function (d) {
        return Math.sin(this.dtr(d));
    },
    cos: function (d) {
        return Math.cos(this.dtr(d));
    },
    tan: function (d) {
        return Math.tan(this.dtr(d));
    },

    arcsin: function (d) {
        return this.rtd(Math.asin(d));
    },
    arccos: function (d) {
        return this.rtd(Math.acos(d));
    },
    arctan: function (d) {
        return this.rtd(Math.atan(d));
    },

    arccot: function (x) {
        return this.rtd(Math.atan(1 / x));
    },
    arctan2: function (y, x) {
        return this.rtd(Math.atan2(y, x));
    },

    fixAngle: function (a) {
        return this.fix(a, 360);
    },
    fixHour: function (a) {
        return this.fix(a, 24);
    },

    fix: function (a, b) {
        a = a - b * (Math.floor(a / b));
        return (a < 0) ? a + b : a;
    }
}


const prayTimes = new PrayTimes();


onMounted(() => {
    prayTimes.tune({imsak: -6, fajr: -6, sunrise: 4, dhuhr: 2, asr: 2, maghrib: 1, isha: 6})
    data.value = prayTimes.getTimes(new Date(), [inputData.lat, inputData.lng, inputData.elevation], +7);
    setInterval(() => {
        today.value = new Date()
    }, 1000)
})
</script>
<template>
    <Head title="Jadwal Sholat"/>
    <inertia-head>
        <title>Your page title</title>
        <meta name="description" content="Your page description">
    </inertia-head>
    <v-app>
        <v-sheet>
            <div>
                <v-sheet height="300" color="teal" @click="randomize">
                    <v-sheet color="teal-darken-4" class="d-flex justify-space-between pa-2">
                        <div>
                            {{ today.getDate() }} {{ today.toLocaleString('id-ID', {weekday: 'long'}) }}
                            {{ today.getFullYear() }}
                        </div>
                        <div>
                            {{ today.getHours() < 10 ? '0' + today.getHours() : today.getHours() }}:{{ today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes() }}:{{ today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds() }}
                        </div>
                    </v-sheet>
                    <div class="d-flex flex-column fill-height justify-center align-center text-white">
                        <p class="px-2 text-center" v-html="wisdoms[form.wisdomIndex]"/>
                    </div>
                </v-sheet>
                <v-card class="rounded-t-xl" density="compact">
                    <v-card-item prepend-icon="mdi-calendar-clock" title="JADWAL IMSAKIYAH"
                                 subtitle="Kecamatan Argomulyo & Sekitarnya"/>
                    <v-divider/>
                    <v-card-text>
                        <v-table>
                            <tr>
                                <td>Imsak</td>
                                <td class="text-right" v-text="data.imsak"/>
                            </tr>
                            <tr>
                                <td>Subuh</td>
                                <td class="text-right" v-text="data.fajr"/>
                            </tr>
                            <tr>
                                <td>Terbit</td>
                                <td class="text-right" v-text="data.sunrise"/>
                            </tr>
                            <tr>
                                <td>Dzuhur</td>
                                <td class="text-right" v-text="data.dhuhr"/>
                            </tr>
                            <tr>
                                <td>Asar</td>
                                <td class="text-right" v-text="data.asr"/>
                            </tr>
                            <tr>
                                <td>Maghrib</td>
                                <td class="text-right" v-text="data.maghrib"/>
                            </tr>
                            <tr>
                                <td>Isya</td>
                                <td class="text-right" v-text="data.isha"/>
                            </tr>
                        </v-table>
                    </v-card-text>
                    <v-sheet height="50" class="d-flex align-center justify-center" color="teal">
                        <h4>powered by: Ansor Argomulyo</h4>
                        <v-btn @click="dialog.info=true" variant="text" icon>
                            <v-icon>mdi-information-outline</v-icon>
                        </v-btn>
                    </v-sheet>
                </v-card>
            </div>
        </v-sheet>
        <v-dialog transition="dialog-bottom-transition" v-model="dialog.info">
            <v-card>
                <v-toolbar density="compact">
                    <v-toolbar-title>Info</v-toolbar-title>
                    <v-spacer/>
                    <v-toolbar-items>
                        <v-btn @click="dialog.info=false" variant="text" icon><v-icon>mdi-close</v-icon></v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <p class="text-justify">Data yang digunakan untuk menghitung waktu imsakiyah adalah koordinat lintang {{inputData.lat}}, koordinat bujur {{inputData.lng}}, ketinggian {{inputData.elevation}}, dan menggunakan zona waktu UTC+7</p>
                    <p class="mt-2 text-justify">Ketuk kata mutiara untuk menampilkan kata mutiara lain secara random</p>
                    <p class="mt-2 text-justify">Jika ada kritik/saran/masukan silahkan hubungi pengembang melalui <v-btn target="_blank" color="teal" href="https://wa.me/6282225005825" variant="text" prepend-icon="mdi-whatsapp">0822 2500 5825</v-btn> </p>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<style scoped>
#hero {
    background: url('https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg')
}

tr {
    border-width: thin 0 0 0;
}

td {
    height: 40px;
    font-size: 14pt;
}
</style>
