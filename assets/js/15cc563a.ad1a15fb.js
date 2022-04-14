"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[998],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3580:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],i={sidebar_label:"AWS"},c=void 0,l={unversionedId:"protocols/aws/aws",id:"protocols/aws/aws",title:"aws",description:"WARNING: THIS IS EXPERIMENTAL, DO NOT NOT EXPECT PRODUCTION READINESS",source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/03-aws/01-aws.md",sourceDirName:"03-protocols/03-aws",slug:"/protocols/aws/aws",permalink:"/smithy4s/docs/protocols/aws/aws",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/03-protocols/03-aws/01-aws.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"AWS"},sidebar:"tutorialSidebar",previous:{title:"Openapi",permalink:"/smithy4s/docs/protocols/simple-rest-json/docs"},next:{title:"Protocols and smithy4s",permalink:"/smithy4s/docs/codegen/customisation"}},p=[{value:"Setup",id:"setup",children:[],level:4}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"WARNING: THIS IS EXPERIMENTAL, DO NOT NOT EXPECT PRODUCTION READINESS")),(0,s.kt)("p",null,"smithy4s provides functions to create AWS clients from generated code. At the time of writing this, smithy4s is only able to derive clients for AWS services that use the ",(0,s.kt)("a",{parentName:"p",href:"https://awslabs.github.io/smithy/1.0/spec/aws/index.html?highlight=aws%20protocols#aws-protocols"},"AWS Json 1.0/1.1 protocol"),"."),(0,s.kt)("p",null,"The AWS smithy specs (that are written in json syntax) can be found in some of the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-sdk-js-v3/tree/main/codegen/sdk-codegen/aws-models"},"official SDKs")," published by AWS. These ",(0,s.kt)("inlineCode",{parentName:"p"},".json files")," can be understood by smithy4s, just like ",(0,s.kt)("inlineCode",{parentName:"p"},".smithy"),", and can be used to generate code. Just copy/paste them in your project."),(0,s.kt)("p",null,"We (the smithy4s maintainers) ",(0,s.kt)("strong",{parentName:"p"},"do not")," intend to publish pre-generated artifacts containing the AWS clients, there's a lot of nuance there and maintainance burden that we do not have the capacity to assume. In particular, backward binary compatibility of the generated code is impossible to guarantee at this time."),(0,s.kt)("h4",{id:"setup"},"Setup"),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"build.sbt")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  // version sourced from the plugin\n  "com.disneystreaming.smithy4s"  %% "smithy4s-aws-http4s" % smithy4sVersion.value\n)\n')),(0,s.kt)("p",null,"In your Scala code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect._\nimport org.http4s.ember.client.EmberClientBuilder\n\nimport smithy4s.aws._ // AWS models and cats-effect/fs2 specific functions // AWS models and cats-effect/fs2 specific functions\nimport smithy4s.aws.http4s._ // AWS/http4s specific integration // AWS/http4s specific integration\nimport com.amazonaws.dynamodb._ // Generated code from specs. // Generated code from specs.\n\nobject Main extends IOApp.Simple {\n\n  def run = resource.use { dynamodb =>\n    dynamodb\n      .describeTable(TableName("omelois-test"))\n      .run\n      .flatMap(IO.println(_))\n  }\n\n  val resource: Resource[IO, AwsClient[DynamoDBGen, IO]] = for {\n    httpClient <- EmberClientBuilder.default[IO].build\n    dynamodb <- DynamoDB.awsClient(httpClient, AwsRegion.US_EAST_1)\n  } yield dynamodb\n}\n')))}m.isMDXComponent=!0}}]);