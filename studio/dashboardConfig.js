export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6a6fe1e28f6c00da6e3146',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-test-studio-wp7jmknn',
                  apiId: '314665e3-b405-4069-80be-b574cf3eb4ad'
                },
                {
                  buildHookId: '5f6a6fe2b2d40401586b5cc7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-test-web-jkgttrqy',
                  apiId: '87f42516-4b37-4e3a-8602-06ab88b99b9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wluna01/sanity-kitchen-sink-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-test-web-jkgttrqy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
