

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}




$.getJSON("data.json", function (json) {
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
                            <span>{{KPE.BASE_VALUE}}</span>
                        </div>
                    </div>
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
                            <span>{{ANALYSIS.BASE_VALUE}}</span>
                        </div>
                    </div>
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
            <span class="tree_label btn-more" v-on:click="show = !show">Проекты</span>

            <transition name="fade">
                <div class="more-info" v-if="show">
                    <div v-for="PROJECTS in info" class="more-info-row">
                        <div class="info-title">{{PROJECTS.NAME}}</div>
                        <div class="info-name">{{PROJECTS.ELEMENT_NAME}}
                            <span>Задача: {{PROJECTS.TASK}}</span>
                            <span>Файл: {{PROJECTS.FILE}}</span>
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
                    <div v-for="PROJECTS in info" class="more-info-row">
                        <div class="info-title">{{PROJECTS.ELEMENT_NAME}}</div>
                        <div class="info-name">{{PROJECTS.NAME}}
                            <span>Задача: <br />{{PROJECTS.TASK}}</span>
                            <span>Файл: <br />{{PROJECTS.FILE}}</span>
                        </div>
                    </div>
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

