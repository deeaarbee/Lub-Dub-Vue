<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header" >
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link to="/"  class="navbar-brand"> Lub and Dub</router-link>

                    <!--<a class="navbar-brand" href="#">Lub and Dub</a>-->
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" >
                    <ul class="nav navbar-nav">
                        <router-link to="/monitor" tag="li" active-class="active"><a> Monitor</a></router-link>
                        <router-link to="/reports" tag="li" active-class="active"><a> Reports</a></router-link>
                        <router-link to="/meds" tag="li" active-class="active"><a> Meds</a></router-link>
                        <router-link to="/profile" tag="li" active-class="active"><a> Profile</a></router-link>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <router-link to="/profile" tag="li"><a> Profile</a></router-link>
                                <router-link to="/logout" tag="li" ><a> Logout</a></router-link>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Kill me</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>


<style scoped>

    body{
        padding : 40px;
    }


</style>