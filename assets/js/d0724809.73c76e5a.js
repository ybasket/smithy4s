"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"ADTs",title:"Algebraic data types"},s=void 0,o={unversionedId:"codegen/customisation/adts",id:"codegen/customisation/adts",title:"Algebraic data types",description:"The default behavior of Smithy4s when rendering unions that target structures is to render the structure",source:"@site/../docs/target/jvm-2.13/mdoc/04-codegen/01-customisation/02-adts.md",sourceDirName:"04-codegen/01-customisation",slug:"/codegen/customisation/adts",permalink:"/smithy4s/docs/codegen/customisation/adts",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/04-codegen/01-customisation/02-adts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"ADTs",title:"Algebraic data types"},sidebar:"tutorialSidebar",previous:{title:"Packed inputs",permalink:"/smithy4s/docs/codegen/customisation/packed-inputs"},next:{title:"Collections",permalink:"/smithy4s/docs/codegen/customisation/collections"}},l={},d=[{value:"smithy4s.meta#adt Trait",id:"smithy4smetaadt-trait",level:2},{value:"Restrictions and Validation",id:"restrictions-and-validation",level:4},{value:"Mixins",id:"mixins",level:4},{value:"smithy4s.meta#adtMember Trait",id:"smithy4smetaadtmember-trait",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The default behavior of Smithy4s when rendering unions that target structures is to render the structure\nin a separate file from the union that targets it. This makes sense if the structure is used in other\ncontexts other than the union. However, it also causes an extra level of nesting within the union.\nThis is because the union will create another case class to contain your structure case class."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"union OrderType {\n  inStore: InStoreOrder\n}\n\nstructure InStoreOrder {\n    @required\n    id: OrderNumber\n    locationId: String\n}\n")),(0,a.kt)("p",null,"Would render the following scala code:"),(0,a.kt)("p",null,"OrderType.scala:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreCase(inStore: InStoreOrder) extends OrderType\n")),(0,a.kt)("p",null,"InStoreOrder.scala:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"case class InStoreOrder(id: OrderNumber, locationId: Option[String] = None)\n")),(0,a.kt)("p",null,"The sealed hierarchy ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType")," has a member named ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreCase"),". This is because\n",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," is rendered in a separate file and ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType")," is sealed."),(0,a.kt)("h2",{id:"smithy4smetaadt-trait"},"smithy4s.meta#adt Trait"),(0,a.kt)("p",null,"Adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#adt")," trait to a ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType")," union changes how the code for that union is generated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@adt // added the adt trait here\nunion OrderType {\n  inStore: InStoreOrder\n}\n\nstructure InStoreOrder {\n    @required\n    id: OrderNumber\n    locationId: String\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreOrder(id: OrderNumber, locationId: Option[String] = None) extends OrderType\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IsStoreOrder")," class has now been updated to be rendered directly as a member of the ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType"),"\nsealed hierarchy instead of in its own file."),(0,a.kt)("h4",{id:"restrictions-and-validation"},"Restrictions and Validation"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait does come with some restrictions. First are requirements for the union which is annotated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The union must contain at least one member"),(0,a.kt)("li",{parentName:"ul"},"The union's members must only target structure shapes")),(0,a.kt)("p",null,"Additionally, there is a requirement that is added onto the structure shapes that the union targets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The structures must NOT be the target of any other union, structure, etc. They can only be the target in the ONE union that is annotated with the ",(0,a.kt)("inlineCode",{parentName:"li"},"adt")," trait.")),(0,a.kt)("p",null,"A validator will be run automatically on your model to make sure it conforms to the requirements above."),(0,a.kt)("p",null,"Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait has NO impact on the serialization/deserialization behaviors of Smithy4s.\nThe only thing it changes is what the generated code looks like. This is accomplished by keeping the\nrendered schemas equivalent, even if the case class is rendered in a different place."),(0,a.kt)("h4",{id:"mixins"},"Mixins"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait has some extra functionality in place to improve ergonomics when working with the generated code. Specifically, the smithy4s code generation will extract all common mixins from the structure members the union targets and move them to the level of the sealed trait that represents the adt. This is easier to conceptualize with an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@adt\nunion OrderType {\n  inStore: InStoreOrder\n  online: OnlineOrder\n}\n\n@mixin\nstructure HasId {\n  @required\n  id: String\n}\n\n@mixin\nstructure HasLocation {\n  @required\n  locationId: String\n}\n\nstructure InStoreOrder with [HasId, HasLocation] {\n    description: String\n}\n\nstructure OnlineOrder with [HasId] {\n  @required\n  userId: String\n}\n")),(0,a.kt)("p",null,"This Smithy model will lead to the following generated code:"),(0,a.kt)("p",null,"HasId.scala:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait HasId {\n  def id: String\n}\n")),(0,a.kt)("p",null,"HasLocation.scala:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait HasLocation {\n  def locationId: String\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends HasId scala.Product with scala.Serializable\ncase class InStoreOrder(id: String, locationId: String) extends OrderType with HasLocation\ncase class OnlineOrder(id: String, userId: String) extends OrderType\n")),(0,a.kt)("p",null,"Since both ",(0,a.kt)("inlineCode",{parentName:"p"},"OnlineOrder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," use the ",(0,a.kt)("inlineCode",{parentName:"p"},"HasId")," mixin, that mixin is moved to the ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType")," level in the generated code. This allows for more flexibility when working with adts. Since only ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"HasLocation")," mixin, that mixin is kept at the level of ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," and extended directly by that case class. "),(0,a.kt)("h2",{id:"smithy4smetaadtmember-trait"},"smithy4s.meta#adtMember Trait"),(0,a.kt)("p",null,"Below we will explore the ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#adtMember")," trait. This trait is mutually exclusive from the ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait described above. It has essentially the same effect as the ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait, with the exception that it DOES NOT extract common mixins to the sealed trait level like the ",(0,a.kt)("inlineCode",{parentName:"p"},"adt")," trait does."),(0,a.kt)("p",null,"Here is an example of using the ",(0,a.kt)("inlineCode",{parentName:"p"},"adtMember")," trait:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"union OrderType {\n  inStore: InStoreOrder\n}\n\n@adtMember(OrderType) // added the adtMember trait here\nstructure InStoreOrder {\n    @required\n    id: OrderNumber\n    locationId: String\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreOrder(id: OrderNumber, locationId: Option[String] = None) extends OrderType\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"IsStoreOrder")," class has now been updated to be rendered directly as a member of the ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType"),"\nsealed hierarchy."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The ",(0,a.kt)("inlineCode",{parentName:"em"},"adtMember")," trait can be applied to any structure as long as said structure is targeted by EXACTLY ONE union."),"\nThis means it must be targeted by the union that is provided as parameter to the adtMember trait.\nThis constraint is fulfilled above because ",(0,a.kt)("inlineCode",{parentName:"p"},"OrderType")," targets ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," is\nannotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@adtMember(OrderType)"),".\nThe structure annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"adtMember")," (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"InStoreOrder"),") also must not be targeted by any other\nstructures or unions in the model. There is a validator that will make sure these requirements are met\nwhenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"adtMember")," trait is in use."),(0,a.kt)("p",null,"Note: The ",(0,a.kt)("inlineCode",{parentName:"p"},"adtMember")," trait has NO impact on the serialization/deserialization behaviors of Smithy4s.\nThe only thing it changes is what the generated code looks like. This is accomplished by keeping the\nrendered schemas equivalent, even if the case class is rendered in a different place."))}u.isMDXComponent=!0}}]);