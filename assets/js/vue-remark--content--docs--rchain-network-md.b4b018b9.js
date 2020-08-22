(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},yZEO:function(e,t,o){"use strict";o.r(t);var r=o("KHd+"),a=o("UQSp"),n=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:a.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:o[e]=function(){return i[e]}}))},l=n.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Run RChain network on a single machine with docker-compose"};var u=function(e){e.options[p]&&(e.options[p]=d),n.a.util.defineReactive(e.options,p,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},h=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"run-rchain-network-on-a-single-machine-with-docker-compose"}},[o("a",{attrs:{href:"#run-rchain-network-on-a-single-machine-with-docker-compose","aria-hidden":"true"}},[e._v("#")]),e._v("Run RChain network on a single machine with docker-compose")]),o("p",[e._v("This repository allows to start small RChain network on local machine using\ndocked-compose. It might be useful for those who wish to test changes to RNode, to get familiar with how network operates and how to configure and start private network. The behaviour is equal to normal network with each node having dedicated machine.")]),o("p",[e._v("By default shard of 3 nodes is created, connected with the virtual network "),o("code",{pre:!0},[e._v("rchain-net")]),e._v(". Each node exposes API ports via docker port mapping. Please see corresponding "),o("code",{pre:!0},[e._v(".yml")]),e._v(" file "),o("code",{pre:!0},[e._v("ports")]),e._v(" section to know exact port numbers.")]),o("p",[e._v("Initially network state is clean. Once shard is started, nodes will perform genesis ceremony and create genesis block. This takes some time, but after that network can be stopped and started much faster. To clean the state of the network and start with the new genesis block, clear or remove "),o("code",{pre:!0},[e._v("data")]),e._v(" folder.")]),o("h2",{attrs:{id:"initial-network-data"}},[o("a",{attrs:{href:"#initial-network-data","aria-hidden":"true"}},[e._v("#")]),e._v("Initial network data")]),o("blockquote",[o("p",[e._v("The following data has to be downloaded first: "),o("a",{attrs:{href:"https://github.com/nzpr/rchain-docker-cluster",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Rchain-docker-cluster")])])]),o("p",[e._v("List of publick keys of validators bonded in genesis block (bonds file): [./genesis/bonds.txt]")]),o("p",[e._v("REV balances in genesis block (wallets file): [./genesis/wallets.txt]")]),o("p",[e._v("Private keys and REV addresses for public keys in bonds file (format "),o("code",{pre:!0},[e._v("PublicKeyHex, PrivateKeyHex, RevAddress")]),e._v(".): [./resources/keys.txt].")]),o("p",[e._v("Configuration files for network nodes: [./conf]")]),o("h3",{attrs:{id:"external-resource"}},[o("a",{attrs:{href:"#external-resource","aria-hidden":"true"}},[e._v("#")]),e._v("External Resource")]),o("ol",[o("li",[o("a",{attrs:{href:"https://github.com/rchain/rchain",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("RChain")])]),o("li",[o("a",{attrs:{href:"https://github.com/rchain/pyrchain",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("PyRChain")])]),o("li",[o("a",{attrs:{href:"https://github.com/nzpr/rchain-docker-cluster",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Rchain-docker-cluster")])])]),o("h3",{attrs:{id:"dependencies"}},[o("a",{attrs:{href:"#dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Dependencies")]),o("ol",[o("li",[o("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("docker")]),e._v(" >=17.09.0")]),o("li",[o("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("docker-compose")]),e._v(" >=1.17.0")])]),o("h2",{attrs:{id:"start-network"}},[o("a",{attrs:{href:"#start-network","aria-hidden":"true"}},[e._v("#")]),e._v("Start Network")]),o("p",[e._v("Start a network of 3 nodes: containers "),o("code",{pre:!0},[e._v("rnode.bootstrap")]),e._v(", "),o("code",{pre:!0},[e._v("rnode.validator1")]),e._v(" and "),o("code",{pre:!0},[e._v("rnode.validator2")])]),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ docker-compose -f ./shard.yml up")])]),o("p",[e._v("To start only a standalone node (container "),o("code",{pre:!0},[e._v("rnode.bootstrap")]),e._v(")")]),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ docker-compose -f ./standalone.yml up")])]),o("h3",{attrs:{id:"optional-enable-automatic-block-creation"}},[o("a",{attrs:{href:"#optional-enable-automatic-block-creation","aria-hidden":"true"}},[e._v("#")]),e._v("[OPTIONAL] Enable automatic block creation")]),o("p",[e._v("Make sure shard is up and running and all nodes printed "),o("code",{pre:!0},[e._v("Making a transition to Running state.")]),e._v(", which means Casper instance is ready to accept connections.")]),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ docker-compose -f ./propose.yml up")])]),o("h3",{attrs:{id:"optional-start-an-observer-node"}},[o("a",{attrs:{href:"#optional-start-an-observer-node","aria-hidden":"true"}},[e._v("#")]),e._v("[OPTIONAL] Start an observer node")]),o("p",[e._v("Observer nodes are same as validators but started without private key provided, so they cannot sign and propose blocks. Such instances allow execution of so-called "),o("code",{pre:!0},[e._v("exploratory deploys")]),e._v(" to query the state of the DAG.")]),o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",{pre:!0,attrs:{class:"language-text"}},[e._v("$ docker-compose -f ./read-only.yml up")])]),o("h1",{attrs:{id:"run-rchain-network-in-the-cloud-with-terraform"}},[o("a",{attrs:{href:"#run-rchain-network-in-the-cloud-with-terraform","aria-hidden":"true"}},[e._v("#")]),e._v("Run RChain network in the cloud with terraform")]),o("p",[e._v("Your can also start a complete new Rchain network on large cloud providers (AWS, Google Cloud, IBM).")]),o("blockquote",[o("p",[e._v("You first have to download the data from: "),o("a",{attrs:{href:"https://github.com/rchain/rchain-testnet-node",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Rchain-terraform")]),e._v(".")])]),o("p",[e._v("Inside the folder resources-tf.{network_name} (e.g. resources-tf.testnet) folder you can wipe out an existing network and reestablish a new one by running:")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("terraform destroy")])]),o("p",[e._v("followed by")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("terraform apply")])]),o("p",[e._v("This requires access to Google Cloud Engine and properly confugired gcloud and terraform.")]),o("p",[e._v("You can run nodes instances as preemptible VMs (which are considerably cheaper) when you need to make a short test.\nBut their availability is not guaranteed.")]),o("p",[e._v("To run preemptible instances (default), use in hosts.tf")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("preemptible       "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\nautomatic_restart "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")])])]),o("p",[e._v("for usual one change config to")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("preemptible       "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\nautomatic_restart "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof u&&u(h);t.default=h.exports}}]);