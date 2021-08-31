

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}




$.getJSON("data2.json", function (json) {
    Vue.component('koeficient', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Array,
            default: []
        }
    },
    template: `
    <div>
            <span class="tree_label btn-more" v-on:click="show = !show">КПЭ</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="KPE in info"  class="more-info-row">
                        <div class="info-name">{{KPE.NAME}}, {{KPE.UNIT}}
                            <div style="display: flex; gap: 10px; width: 150px; min-width: 150px; justify-content: space-between; text-align: center;">
                                <span style="width: 33%;">{{KPE.BASE_VALUE}}</span>
                                <span style="width: 33%;">{{KPE.MIDDLE_VALUE}}</span>
                                <span style="width: 33%;">{{KPE.TARGET_VALUE}}</span>
                            </div>
                        </div>
                    </div>
                    <div v-on:click="show = !show" class="btn-close"></div>
                </div>
            </transition>
    </div>
    `
});;
    Vue.component('analysis', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Array,
            default: []
        }
    },
    template: `
    <div>
            <span class="tree_label btn-more" v-on:click="show = !show">Показатели</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="ANALYSIS in info" class="more-info-row">
                        <div class="info-name">{{ANALYSIS.NAME}}, {{ANALYSIS.UNIT}}
                            <div style="display: flex; gap: 10px; width: 150px; min-width: 150px; justify-content: space-between; text-align: center;">
                                <span style="width: 33%;">{{ANALYSIS.BASE_VALUE}}</span>
                                <span style="width: 33%;">{{ANALYSIS.MIDDLE_VALUE}}</span>
                                <span style="width: 33%;">{{ANALYSIS.TARGET_VALUE}}</span>
                            </div>
                        </div>
                    </div>
                    <div v-on:click="show = !show" class="btn-close"></div>
                </div>
            </transition>
    </div>
    `
});;
    Vue.component('projects', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Array,
            default: []
        }
    },
    template: `
    <div>
            <span class="tree_label btn-more" v-on:click="show = !show">Файлы самообследования</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="PROJECTS in info" class="more-info-row">
                        <div style="display: flex; justify-content: space-between;">
                            <p class="info-name">{{PROJECTS.ELEMENT_NAME}}</p>
                            <a v-bind:href="PROJECTS.FILE_PATH" class="download">
                                <svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: 20px; margin-bottom: -4px;" viewBox="-17 -55 560 560"><path d="m512.5 215.125c-6.894531.023438-12.480469 5.601562-12.5 12.5v157.75c-.058594 20.683594-16.816406 37.4375-37.5 37.5h-400c-20.683594-.0625-37.441406-16.816406-37.5-37.5v-157.75c0-6.902344-5.59375-12.5-12.5-12.5s-12.5 5.597656-12.5 12.5v157.75c.015625 34.511719 27.988281 62.484375 62.5 62.5h400c34.511719-.015625 62.484375-27.988281 62.5-62.5v-157.75c-.019531-6.898438-5.605469-12.476562-12.5-12.5zm0 0"/><path d="m171 286.5 79.5 68.125c.070312 0 .125.058594.125.125l.375.375c.125.125.375.25.5.375.121094.15625.300781.246094.5.25.125.125.375.25.5.375s.375.125.5.25.375.125.625.25c.125.125.375.125.5.25.25.125.375.125.625.25.125 0 .375.125.5.125.25 0 .375.125.625.125.125 0 .375.125.5.125.25 0 .5.125.75.125h3.25c.25 0 .5-.125.75-.125.125 0 .375-.125.5-.125.25 0 .375-.125.625-.125.125 0 .375-.125.5-.125.25-.125.375-.125.625-.25.125-.125.375-.125.5-.25.25-.125.375-.125.625-.25.125-.125.375-.125.5-.25s.375-.25.5-.375.25-.125.5-.25c.125-.125.375-.25.5-.375l.375-.375c.070312 0 .125-.058594.125-.125l79.5-68.125c5.25-4.488281 5.863281-12.378906 1.375-17.625-4.484375-5.246094-12.375-5.863281-17.625-1.375l-59 50.5v-308c0-6.90625-5.59375-12.5-12.5-12.5s-12.5 5.59375-12.5 12.5v308l-59-50.5c-5.25-4.488281-13.140625-3.871094-17.625 1.375-4.488281 5.246094-3.875 13.136719 1.375 17.625zm0 0"/></svg>
                                Скачать
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
    </div>
    `
});;
    Vue.component('roadmap', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Array,
            default: []
        }
    },
    template: `
    <div>
            <span class="tree_label btn-more" v-on:click="show = !show">Дорожные карты</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="ROADMAP in info" class="more-info-row">
                        <div style="display: flex; justify-content: space-between;">
                            <p class="info-name">{{ROADMAP.ELEMENT_NAME}}</p>
                            <a v-bind:href="ROADMAP.FILE_PATH" class="download">
                                <svg xmlns="http://www.w3.org/2000/svg" style="height: 20px; width: 20px; margin-bottom: -4px;" viewBox="-17 -55 560 560"><path d="m512.5 215.125c-6.894531.023438-12.480469 5.601562-12.5 12.5v157.75c-.058594 20.683594-16.816406 37.4375-37.5 37.5h-400c-20.683594-.0625-37.441406-16.816406-37.5-37.5v-157.75c0-6.902344-5.59375-12.5-12.5-12.5s-12.5 5.597656-12.5 12.5v157.75c.015625 34.511719 27.988281 62.484375 62.5 62.5h400c34.511719-.015625 62.484375-27.988281 62.5-62.5v-157.75c-.019531-6.898438-5.605469-12.476562-12.5-12.5zm0 0"/><path d="m171 286.5 79.5 68.125c.070312 0 .125.058594.125.125l.375.375c.125.125.375.25.5.375.121094.15625.300781.246094.5.25.125.125.375.25.5.375s.375.125.5.25.375.125.625.25c.125.125.375.125.5.25.25.125.375.125.625.25.125 0 .375.125.5.125.25 0 .375.125.625.125.125 0 .375.125.5.125.25 0 .5.125.75.125h3.25c.25 0 .5-.125.75-.125.125 0 .375-.125.5-.125.25 0 .375-.125.625-.125.125 0 .375-.125.5-.125.25-.125.375-.125.625-.25.125-.125.375-.125.5-.25.25-.125.375-.125.625-.25.125-.125.375-.125.5-.25s.375-.25.5-.375.25-.125.5-.25c.125-.125.375-.25.5-.375l.375-.375c.070312 0 .125-.058594.125-.125l79.5-68.125c5.25-4.488281 5.863281-12.378906 1.375-17.625-4.484375-5.246094-12.375-5.863281-17.625-1.375l-59 50.5v-308c0-6.90625-5.59375-12.5-12.5-12.5s-12.5 5.59375-12.5 12.5v308l-59-50.5c-5.25-4.488281-13.140625-3.871094-17.625 1.375-4.488281 5.246094-3.875 13.136719 1.375 17.625zm0 0"/></svg>
                                Скачать
                            </a>
                        </div>
                    </div>
                </div>
            </transition>
    </div>
    `
});;
    Vue.component('solutions', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Object,
            default: {}
        },
        events: {
            type: Object,
            default: {}
        }
    },
    template: `
    <div>
            <span class="tree_label btn-more" v-on:click="show = !show">Решения</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="SOLUTIONS in info" class="more-info-row">
                        <div class="info-name">{{SOLUTIONS.TITLE }}</div>
                            <events :info="events" :solID="SOLUTIONS.ID"></events>
                    </div>
                    <div v-on:click="show = !show" class="btn-close"></div>
                </div>
            </transition>

    </div>
    `
});;
    Vue.component('events', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Object,
            default: {}
        },
        solID: {
            type: String,
            default: ''
        }
    },
    template: `
    <div>
            <span class="btn-more btn-solutions" v-on:click="show = !show">Мероприятия</span>

            <transition name="fade">
                <div class="more-info solutions-wrapper" v-if="show">
                    <div v-for="EVENT in info[solID]" class="more-info-row">
                            <div class="info-name">{{EVENT.TITLE}}</div>
                    </div>
                    <div v-on:click="show = !show" class="btn-close"></div>
                </div>
            </transition>
    </div>
    `
});;
    Vue.component('comments', {
    data() {
        return {
            show: false
        }
    },
    props: {
        info: {
            type: Array,
            default: []
        }
    },
    template: `
    <div>
            <span class="tree_label btn-more" v-on:click="show = !show">Комментарии</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="COMMENTS in info" class="more-info-row">
                        <div class="info-name">{{COMMENTS.POST_DATE}}</div>
                        <div class="info-name" style="color: #000">{{COMMENTS.POST_MESSAGE}}</div>
                    </div>
                    <div v-on:click="show = !show" class="btn-close"></div>
                </div>
            </transition>
    </div>
    `
});;

    Vue.component('loading-screen', {
        template: `
        <div id="loading" class="preloader-tree">
            Загрузка...
        </div>`
    })

    var app = new Vue({
        el: '#dashbord',
        data: {
            start: json,
            isLoading: true,
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 1000)
        },

    })
});

