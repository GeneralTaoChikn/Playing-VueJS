<template>
    <div>   
        <p>Test This Shit</p>
        <ul>
            <resource-item v-for="resource in storedResources"
                :key="resource.id"
                :title="resource.title"
                :description="resource.description"
                :link="resource.link"
                ></resource-item>
        </ul>
    </div>
</template>

<script>
import ResourceItem from './components/ResourceItem.vue'


export default{
    components: {
        'resource-item': ResourceItem
    },
    data() {
        return{
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The VueJS documentaion',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Official Google',
                    description: 'The official resource',
                    link: 'https://google.com'
                }
            ]
        }
    }
};
</script>
