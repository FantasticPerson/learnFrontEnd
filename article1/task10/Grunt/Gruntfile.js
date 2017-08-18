module.exports = function(grunt){
        grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            option:{
                banner:'/*!create by <%=grunt.template.today("yyyy-mm-dd")%>*/\n',
            },
            static_mappings:{
                files:[
                    {
                        src:"./js/index.js",
                        dest:"build/index.min.js"
                    },{
                        src:"./js/main.js",
                        dest:"build/main.min.js"
                    }
                ]

            }
        },
        concat:{
            bar:{
                src:['build/*.js'],
                dest:'dest/all.min.js'
            }
        },
        watch:{
            files:['js/index.js'],
            tasks:['uglify','concat']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['uglify','concat','watch']);
}