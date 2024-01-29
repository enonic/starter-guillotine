
> [!NOTE]
> **This starter is deprecated since the release of Guillotine 7**. 
> You can now extend the Guillotine application's API directly instead.
> Visit the [Guillotine documentation](https://developer.enonic.com/docs/guillotine) for more details

# Headless CMS Starter for Enonic XP

Use this starter to get an application with the Guillotine library embedded - out of the box.

# Usage

Using Enonic CLI, run the following command to create a new app, using this starter as your template

* `enonic project create -r starter-headless`
* `enonic project deploy`
* Using Content Studio, add this application to a site
* Your custom Guillotine API will now be available at `http://localhost:8080/site/<repo>/<branch>/<path-to-your-site>/api` 
 
For more details on how to customize the API, visit https://developer.enonic.com/docs/guillotine/

## Updating this starter

* Clone this Github project: `git clone ...`
* Build the project from project directory: `./gradlew build`
