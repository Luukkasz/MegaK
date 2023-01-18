module.exports = {
    apps: [
        {
            name: 'myapp',
            script: './dist/day_1_listaMikolajaTest/index.js',
            autorestart: true,
            max_memory_restart: '2G',
            exec_mode: 'cluster',
            instances: -1,
        }
    ]
}