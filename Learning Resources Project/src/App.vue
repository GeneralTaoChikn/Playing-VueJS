<template>
    <div>   
        <h1>test</h1>
        <p>helloWorld</p>
        <ul>
            <resource-item></resource-item>
        </ul>
    </div>
</template>

<script>
import ResourceItem from './components/ResourceItem.vue'
export default{
    components: {
        'Resource-Item': ResourceItem
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
}
</script>
