"use strict";
exports.id = "vendor-chunks/@radix-ui";
exports.ids = ["vendor-chunks/@radix-ui"];
exports.modules = {

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs":
/*!***********************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeEventHandlers: () => (/* binding */ composeEventHandlers)
/* harmony export */ });
// packages/core/primitive/src/primitive.tsx
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-arrow/dist/index.mjs":
/*!*************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-arrow/dist/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrow: () => (/* binding */ Arrow),
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
// packages/react/arrow/src/Arrow.tsx



var NAME = "Arrow";
var Arrow = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, width = 10, height = 5, ...arrowProps } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
    _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.Primitive.svg,
    {
      ...arrowProps,
      ref: forwardedRef,
      width,
      height,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: props.asChild ? children : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Arrow.displayName = NAME;
var Root = Arrow;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-collection/dist/index.mjs":
/*!******************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-collection/dist/index.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCollection: () => (/* binding */ createCollection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ createCollection auto */ // packages/react/collection/src/Collection.tsx





function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
            context.itemMap.set(ref, {
                ref,
                ...itemData
            });
            return ()=>void context.itemMap.delete(ref);
        });
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot, {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
            const collectionNode = context.collectionRef.current;
            if (!collectionNode) return [];
            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
            const items = Array.from(context.itemMap.values());
            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current));
            return orderedItems;
        }, [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeRefs: () => (/* binding */ composeRefs),
/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
// packages/react/compose-refs/src/composeRefs.tsx

function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs":
/*!***************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContext: () => (/* binding */ createContext2),
/* harmony export */   createContextScope: () => (/* binding */ createContextScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
// packages/react/context/src/createContext.tsx


function createContext2(rootComponentName, defaultContext) {
  const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);
  function Provider(props) {
    const { children, ...context } = props;
    const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => context, Object.values(context));
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, { value, children });
  }
  function useContext2(consumerName) {
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    if (context) return context;
    if (defaultContext !== void 0) return defaultContext;
    throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext2];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    function Provider(props) {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName][index] || BaseContext;
      const value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, { value, children });
    }
    function useContext2(consumerName, scope) {
      const Context = scope?.[scopeName][index] || BaseContext;
      const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    Provider.displayName = rootComponentName + "Provider";
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dialog/dist/index.mjs":
/*!**************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dialog/dist/index.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Close: () => (/* binding */ Close),
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Description: () => (/* binding */ Description),
/* harmony export */   Dialog: () => (/* binding */ Dialog),
/* harmony export */   DialogClose: () => (/* binding */ DialogClose),
/* harmony export */   DialogContent: () => (/* binding */ DialogContent),
/* harmony export */   DialogDescription: () => (/* binding */ DialogDescription),
/* harmony export */   DialogOverlay: () => (/* binding */ DialogOverlay),
/* harmony export */   DialogPortal: () => (/* binding */ DialogPortal),
/* harmony export */   DialogTitle: () => (/* binding */ DialogTitle),
/* harmony export */   DialogTrigger: () => (/* binding */ DialogTrigger),
/* harmony export */   Overlay: () => (/* binding */ Overlay),
/* harmony export */   Portal: () => (/* binding */ Portal),
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   Title: () => (/* binding */ Title),
/* harmony export */   Trigger: () => (/* binding */ Trigger),
/* harmony export */   WarningProvider: () => (/* binding */ WarningProvider),
/* harmony export */   createDialogScope: () => (/* binding */ createDialogScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-id */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-controllable-state */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @radix-ui/react-dismissable-layer */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs");
/* harmony import */ var _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @radix-ui/react-focus-scope */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-scope/dist/index.mjs");
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/react-portal */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-portal/dist/index.mjs");
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-presence */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-presence/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @radix-ui/react-focus-guards */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-guards/dist/index.mjs");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-remove-scroll */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/react-remove-scroll/dist/es2015/Combination.js");
/* harmony import */ var aria_hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! aria-hidden */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/aria-hidden/dist/es2015/index.js");
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/react-slot */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Close,Content,Description,Dialog,DialogClose,DialogContent,DialogDescription,DialogOverlay,DialogPortal,DialogTitle,DialogTrigger,Overlay,Portal,Root,Title,Trigger,WarningProvider,createDialogScope auto */ // packages/react/dialog/src/Dialog.tsx
















var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.useId)(),
        titleId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.useId)(),
        descriptionId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_4__.useId)(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.Primitive.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, (child)=>/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__.Portal, {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_remove_scroll__WEBPACK_IMPORTED_MODULE_10__["default"], {
        as: _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_11__.Slot,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.Primitive.div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const content = contentRef.current;
        if (content) return (0,aria_hidden__WEBPACK_IMPORTED_MODULE_12__.hideOthers)(content);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const hasPointerDownOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, contentRef);
    (0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_13__.useFocusGuards)();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_14__.FocusScope, {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_15__.DismissableLayer, {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.Primitive.h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.Primitive.p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.Primitive.button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_7__.composeEventHandlers)(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContext)(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) console.error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const describedById = contentRef.current?.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root = Dialog;
var Trigger = DialogTrigger;
var Portal = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-direction/dist/index.mjs":
/*!*****************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-direction/dist/index.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectionProvider: () => (/* binding */ DirectionProvider),
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   useDirection: () => (/* binding */ useDirection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
// packages/react/direction/src/Direction.tsx


var DirectionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
var DirectionProvider = (props) => {
  const { dir, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DirectionContext.Provider, { value: dir, children });
};
function useDirection(localDir) {
  const globalDir = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":
/*!*************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Branch: () => (/* binding */ Branch),
/* harmony export */   DismissableLayer: () => (/* binding */ DismissableLayer),
/* harmony export */   DismissableLayerBranch: () => (/* binding */ DismissableLayerBranch),
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_escape_keydown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-escape-keydown */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Branch,DismissableLayer,DismissableLayerBranch,Root auto */ // packages/react/dismissable-layer/src/DismissableLayer.tsx







var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DismissableLayerContext);
    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, (node2)=>setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    (0,_radix_ui_react_use_escape_keydown__WEBPACK_IMPORTED_MODULE_3__.useEscapeKeydown)((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown?.(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (!node) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
        };
    }, [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        return ()=>{
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
        };
    }, [
        node,
        context
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const handleUpdate = ()=>force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.Primitive.div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_5__.composeEventHandlers)(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DismissableLayerContext);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, ref);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.Primitive.div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onPointerDownOutside);
    const isPointerInsideReactTreeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const handleClickRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(()=>{});
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                let handleAndDispatchPointerDownOutsideEvent2 = function() {
                    handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                };
                var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                const eventDetail = {
                    originalEvent: event
                };
                if (event.pointerType === "touch") {
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                    ownerDocument.addEventListener("click", handleClickRef.current, {
                        once: true
                    });
                } else {
                    handleAndDispatchPointerDownOutsideEvent2();
                }
            } else {
                ownerDocument.removeEventListener("click", handleClickRef.current);
            }
            isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener("pointerdown", handlePointerDown);
            ownerDocument.removeEventListener("click", handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onFocusOutside);
    const isFocusInsideReactTreeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return ()=>ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.dispatchDiscreteCustomEvent)(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root = DismissableLayer;
var Branch = DismissableLayerBranch;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs":
/*!*********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arrow: () => (/* binding */ Arrow2),
/* harmony export */   CheckboxItem: () => (/* binding */ CheckboxItem2),
/* harmony export */   Content: () => (/* binding */ Content2),
/* harmony export */   DropdownMenu: () => (/* binding */ DropdownMenu),
/* harmony export */   DropdownMenuArrow: () => (/* binding */ DropdownMenuArrow),
/* harmony export */   DropdownMenuCheckboxItem: () => (/* binding */ DropdownMenuCheckboxItem),
/* harmony export */   DropdownMenuContent: () => (/* binding */ DropdownMenuContent),
/* harmony export */   DropdownMenuGroup: () => (/* binding */ DropdownMenuGroup),
/* harmony export */   DropdownMenuItem: () => (/* binding */ DropdownMenuItem),
/* harmony export */   DropdownMenuItemIndicator: () => (/* binding */ DropdownMenuItemIndicator),
/* harmony export */   DropdownMenuLabel: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   DropdownMenuPortal: () => (/* binding */ DropdownMenuPortal),
/* harmony export */   DropdownMenuRadioGroup: () => (/* binding */ DropdownMenuRadioGroup),
/* harmony export */   DropdownMenuRadioItem: () => (/* binding */ DropdownMenuRadioItem),
/* harmony export */   DropdownMenuSeparator: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   DropdownMenuSub: () => (/* binding */ DropdownMenuSub),
/* harmony export */   DropdownMenuSubContent: () => (/* binding */ DropdownMenuSubContent),
/* harmony export */   DropdownMenuSubTrigger: () => (/* binding */ DropdownMenuSubTrigger),
/* harmony export */   DropdownMenuTrigger: () => (/* binding */ DropdownMenuTrigger),
/* harmony export */   Group: () => (/* binding */ Group2),
/* harmony export */   Item: () => (/* binding */ Item2),
/* harmony export */   ItemIndicator: () => (/* binding */ ItemIndicator2),
/* harmony export */   Label: () => (/* binding */ Label2),
/* harmony export */   Portal: () => (/* binding */ Portal2),
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup2),
/* harmony export */   RadioItem: () => (/* binding */ RadioItem2),
/* harmony export */   Root: () => (/* binding */ Root2),
/* harmony export */   Separator: () => (/* binding */ Separator2),
/* harmony export */   Sub: () => (/* binding */ Sub2),
/* harmony export */   SubContent: () => (/* binding */ SubContent2),
/* harmony export */   SubTrigger: () => (/* binding */ SubTrigger2),
/* harmony export */   Trigger: () => (/* binding */ Trigger),
/* harmony export */   createDropdownMenuScope: () => (/* binding */ createDropdownMenuScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-use-controllable-state */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-menu */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-menu/dist/index.mjs");
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-id */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Arrow,CheckboxItem,Content,DropdownMenu,DropdownMenuArrow,DropdownMenuCheckboxItem,DropdownMenuContent,DropdownMenuGroup,DropdownMenuItem,DropdownMenuItemIndicator,DropdownMenuLabel,DropdownMenuPortal,DropdownMenuRadioGroup,DropdownMenuRadioItem,DropdownMenuSeparator,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuTrigger,Group,Item,ItemIndicator,Label,Portal,RadioGroup,RadioItem,Root,Separator,Sub,SubContent,SubTrigger,Trigger,createDropdownMenuScope auto */ // packages/react/dropdown-menu/src/DropdownMenu.tsx










var DROPDOWN_MENU_NAME = "DropdownMenu";
var [createDropdownMenuContext, createDropdownMenuScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(DROPDOWN_MENU_NAME, [
    _radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuScope
]);
var useMenuScope = (0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuScope)();
var [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME);
var DropdownMenu = (props)=>{
    const { __scopeDropdownMenu, children, dir, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DropdownMenuProvider, {
        scope: __scopeDropdownMenu,
        triggerId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__.useId)(),
        triggerRef,
        contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_5__.useId)(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Root, {
            ...menuScope,
            open,
            onOpenChange: setOpen,
            dir,
            modal,
            children
        })
    });
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME = "DropdownMenuTrigger";
var DropdownMenuTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, disabled = false, ...triggerProps } = props;
    const context = useDropdownMenuContext(TRIGGER_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Anchor, {
        asChild: true,
        ...menuScope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_6__.Primitive.button, {
            type: "button",
            id: context.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": context.open ? context.contentId : void 0,
            "data-state": context.open ? "open" : "closed",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            ...triggerProps,
            ref: (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_7__.composeRefs)(forwardedRef, context.triggerRef),
            onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.composeEventHandlers)(props.onPointerDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onOpenToggle();
                    if (!context.open) event.preventDefault();
                }
            }),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.composeEventHandlers)(props.onKeyDown, (event)=>{
                if (disabled) return;
                if ([
                    "Enter",
                    " "
                ].includes(event.key)) context.onOpenToggle();
                if (event.key === "ArrowDown") context.onOpenChange(true);
                if ([
                    "Enter",
                    " ",
                    "ArrowDown"
                ].includes(event.key)) event.preventDefault();
            })
        })
    });
});
DropdownMenuTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DropdownMenuPortal";
var DropdownMenuPortal = (props)=>{
    const { __scopeDropdownMenu, ...portalProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Portal, {
        ...menuScope,
        ...portalProps
    });
};
DropdownMenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "DropdownMenuContent";
var DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...contentProps } = props;
    const context = useDropdownMenuContext(CONTENT_NAME, __scopeDropdownMenu);
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const hasInteractedOutsideRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Content, {
        id: context.contentId,
        "aria-labelledby": context.triggerId,
        ...menuScope,
        ...contentProps,
        ref: forwardedRef,
        onCloseAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.composeEventHandlers)(props.onCloseAutoFocus, (event)=>{
            if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
            hasInteractedOutsideRef.current = false;
            event.preventDefault();
        }),
        onInteractOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__.composeEventHandlers)(props.onInteractOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (!context.modal || isRightClick) hasInteractedOutsideRef.current = true;
        }),
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "DropdownMenuGroup";
var DropdownMenuGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...groupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Group, {
        ...menuScope,
        ...groupProps,
        ref: forwardedRef
    });
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel";
var DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...labelProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Label, {
        ...menuScope,
        ...labelProps,
        ref: forwardedRef
    });
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem";
var DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Item, {
        ...menuScope,
        ...itemProps,
        ref: forwardedRef
    });
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem";
var DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...checkboxItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.CheckboxItem, {
        ...menuScope,
        ...checkboxItemProps,
        ref: forwardedRef
    });
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup";
var DropdownMenuRadioGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioGroupProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.RadioGroup, {
        ...menuScope,
        ...radioGroupProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem";
var DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...radioItemProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.RadioItem, {
        ...menuScope,
        ...radioItemProps,
        ref: forwardedRef
    });
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator";
var DropdownMenuItemIndicator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...itemIndicatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.ItemIndicator, {
        ...menuScope,
        ...itemIndicatorProps,
        ref: forwardedRef
    });
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator";
var DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...separatorProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Separator, {
        ...menuScope,
        ...separatorProps,
        ref: forwardedRef
    });
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "DropdownMenuArrow";
var DropdownMenuArrow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...arrowProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Arrow, {
        ...menuScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
DropdownMenuArrow.displayName = ARROW_NAME;
var DropdownMenuSub = (props)=>{
    const { __scopeDropdownMenu, children, open: openProp, onOpenChange, defaultOpen } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    const [open = false, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_4__.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.Sub, {
        ...menuScope,
        open,
        onOpenChange: setOpen,
        children
    });
};
var SUB_TRIGGER_NAME = "DropdownMenuSubTrigger";
var DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subTriggerProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.SubTrigger, {
        ...menuScope,
        ...subTriggerProps,
        ref: forwardedRef
    });
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent";
var DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeDropdownMenu, ...subContentProps } = props;
    const menuScope = useMenuScope(__scopeDropdownMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_3__.SubContent, {
        ...menuScope,
        ...subContentProps,
        ref: forwardedRef,
        style: {
            ...props.style,
            // re-namespace exposed content custom properties
            ...{
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }
    });
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2 = DropdownMenu;
var Trigger = DropdownMenuTrigger;
var Portal2 = DropdownMenuPortal;
var Content2 = DropdownMenuContent;
var Group2 = DropdownMenuGroup;
var Label2 = DropdownMenuLabel;
var Item2 = DropdownMenuItem;
var CheckboxItem2 = DropdownMenuCheckboxItem;
var RadioGroup2 = DropdownMenuRadioGroup;
var RadioItem2 = DropdownMenuRadioItem;
var ItemIndicator2 = DropdownMenuItemIndicator;
var Separator2 = DropdownMenuSeparator;
var Arrow2 = DropdownMenuArrow;
var Sub2 = DropdownMenuSub;
var SubTrigger2 = DropdownMenuSubTrigger;
var SubContent2 = DropdownMenuSubContent;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-guards/dist/index.mjs":
/*!********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-guards/dist/index.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusGuards: () => (/* binding */ FocusGuards),
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   useFocusGuards: () => (/* binding */ useFocusGuards)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* __next_internal_client_entry_do_not_use__ FocusGuards,Root,useFocusGuards auto */ // packages/react/focus-guards/src/FocusGuards.tsx

var count = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
        document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
        count++;
        return ()=>{
            if (count === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            count--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none";
    return element;
}
var Root = FocusGuards;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-scope/dist/index.mjs":
/*!*******************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-scope/dist/index.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusScope: () => (/* binding */ FocusScope),
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ FocusScope,Root auto */ // packages/react/focus-scope/src/FocusScope.tsx





var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const onMountAutoFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__.useCallbackRef)(onMountAutoFocusProp);
    const onUnmountAutoFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_2__.useCallbackRef)(onUnmountAutoFocusProp);
    const lastFocusedElementRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node)=>setContainer(node));
    const focusScope = react__WEBPACK_IMPORTED_MODULE_0__.useRef({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        focus(previouslyFocusedElement ?? document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.Primitive.div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root = FocusScope;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs":
/*!**********************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
// packages/react/id/src/id.tsx


var useReactId = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))["useId".toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());
  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-menu/dist/index.mjs":
/*!************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-menu/dist/index.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anchor: () => (/* binding */ Anchor2),
/* harmony export */   Arrow: () => (/* binding */ Arrow2),
/* harmony export */   CheckboxItem: () => (/* binding */ CheckboxItem),
/* harmony export */   Content: () => (/* binding */ Content2),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   Item: () => (/* binding */ Item2),
/* harmony export */   ItemIndicator: () => (/* binding */ ItemIndicator),
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   MenuAnchor: () => (/* binding */ MenuAnchor),
/* harmony export */   MenuArrow: () => (/* binding */ MenuArrow),
/* harmony export */   MenuCheckboxItem: () => (/* binding */ MenuCheckboxItem),
/* harmony export */   MenuContent: () => (/* binding */ MenuContent),
/* harmony export */   MenuGroup: () => (/* binding */ MenuGroup),
/* harmony export */   MenuItem: () => (/* binding */ MenuItem),
/* harmony export */   MenuItemIndicator: () => (/* binding */ MenuItemIndicator),
/* harmony export */   MenuLabel: () => (/* binding */ MenuLabel),
/* harmony export */   MenuPortal: () => (/* binding */ MenuPortal),
/* harmony export */   MenuRadioGroup: () => (/* binding */ MenuRadioGroup),
/* harmony export */   MenuRadioItem: () => (/* binding */ MenuRadioItem),
/* harmony export */   MenuSeparator: () => (/* binding */ MenuSeparator),
/* harmony export */   MenuSub: () => (/* binding */ MenuSub),
/* harmony export */   MenuSubContent: () => (/* binding */ MenuSubContent),
/* harmony export */   MenuSubTrigger: () => (/* binding */ MenuSubTrigger),
/* harmony export */   Portal: () => (/* binding */ Portal),
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup),
/* harmony export */   RadioItem: () => (/* binding */ RadioItem),
/* harmony export */   Root: () => (/* binding */ Root3),
/* harmony export */   Separator: () => (/* binding */ Separator),
/* harmony export */   Sub: () => (/* binding */ Sub),
/* harmony export */   SubContent: () => (/* binding */ SubContent),
/* harmony export */   SubTrigger: () => (/* binding */ SubTrigger),
/* harmony export */   createMenuScope: () => (/* binding */ createMenuScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-collection */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-collection/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-direction */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-direction/dist/index.mjs");
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @radix-ui/react-dismissable-layer */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs");
/* harmony import */ var _radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @radix-ui/react-focus-guards */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-guards/dist/index.mjs");
/* harmony import */ var _radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @radix-ui/react-focus-scope */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-focus-scope/dist/index.mjs");
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @radix-ui/react-id */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs");
/* harmony import */ var _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-popper */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-popper/dist/index.mjs");
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/react-portal */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-portal/dist/index.mjs");
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-presence */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-presence/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-roving-focus */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-roving-focus/dist/index.mjs");
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @radix-ui/react-slot */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var aria_hidden__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! aria-hidden */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/aria-hidden/dist/es2015/index.js");
/* harmony import */ var react_remove_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-remove-scroll */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/react-remove-scroll/dist/es2015/Combination.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Anchor,Arrow,CheckboxItem,Content,Group,Item,ItemIndicator,Label,Menu,MenuAnchor,MenuArrow,MenuCheckboxItem,MenuContent,MenuGroup,MenuItem,MenuItemIndicator,MenuLabel,MenuPortal,MenuRadioGroup,MenuRadioItem,MenuSeparator,MenuSub,MenuSubContent,MenuSubTrigger,Portal,RadioGroup,RadioItem,Root,Separator,Sub,SubContent,SubTrigger,createMenuScope auto */ // packages/react/menu/src/Menu.tsx






















var SELECTION_KEYS = [
    "Enter",
    " "
];
var FIRST_KEYS = [
    "ArrowDown",
    "PageUp",
    "Home"
];
var LAST_KEYS = [
    "ArrowUp",
    "PageDown",
    "End"
];
var FIRST_LAST_KEYS = [
    ...FIRST_KEYS,
    ...LAST_KEYS
];
var SUB_OPEN_KEYS = {
    ltr: [
        ...SELECTION_KEYS,
        "ArrowRight"
    ],
    rtl: [
        ...SELECTION_KEYS,
        "ArrowLeft"
    ]
};
var SUB_CLOSE_KEYS = {
    ltr: [
        "ArrowLeft"
    ],
    rtl: [
        "ArrowRight"
    ]
};
var MENU_NAME = "Menu";
var [Collection, useCollection, createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.createCollection)(MENU_NAME);
var [createMenuContext, createMenuScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.createContextScope)(MENU_NAME, [
    createCollectionScope,
    _radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.createPopperScope,
    _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_5__.createRovingFocusGroupScope
]);
var usePopperScope = (0,_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.createPopperScope)();
var useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_5__.createRovingFocusGroupScope)();
var [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME);
var [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME);
var Menu = (props)=>{
    const { __scopeMenu, open = false, children, dir, onOpenChange, modal = true } = props;
    const popperScope = usePopperScope(__scopeMenu);
    const [content, setContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const isUsingKeyboardRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const handleOpenChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onOpenChange);
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_7__.useDirection)(dir);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const handleKeyDown = ()=>{
            isUsingKeyboardRef.current = true;
            document.addEventListener("pointerdown", handlePointer, {
                capture: true,
                once: true
            });
            document.addEventListener("pointermove", handlePointer, {
                capture: true,
                once: true
            });
        };
        const handlePointer = ()=>isUsingKeyboardRef.current = false;
        document.addEventListener("keydown", handleKeyDown, {
            capture: true
        });
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown, {
                capture: true
            });
            document.removeEventListener("pointerdown", handlePointer, {
                capture: true
            });
            document.removeEventListener("pointermove", handlePointer, {
                capture: true
            });
        };
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.Root, {
        ...popperScope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuRootProvider, {
                scope: __scopeMenu,
                onClose: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>handleOpenChange(false), [
                    handleOpenChange
                ]),
                isUsingKeyboardRef,
                dir: direction,
                modal,
                children
            })
        })
    });
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor";
var MenuAnchor = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, ...anchorProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.Anchor, {
        ...popperScope,
        ...anchorProps,
        ref: forwardedRef
    });
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME = "MenuPortal";
var [PortalProvider, usePortalContext] = createMenuContext(PORTAL_NAME, {
    forceMount: void 0
});
var MenuPortal = (props)=>{
    const { __scopeMenu, forceMount, children, container } = props;
    const context = useMenuContext(PORTAL_NAME, __scopeMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PortalProvider, {
        scope: __scopeMenu,
        forceMount,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_9__.Portal, {
                asChild: true,
                container,
                children
            })
        })
    });
};
MenuPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "MenuContent";
var [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME);
var MenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Slot, {
                scope: props.__scopeMenu,
                children: rootContext.modal ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuRootContentModal, {
                    ...contentProps,
                    ref: forwardedRef
                }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuRootContentNonModal, {
                    ...contentProps,
                    ref: forwardedRef
                })
            })
        })
    });
});
var MenuRootContentModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__.useComposedRefs)(forwardedRef, ref);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const content = ref.current;
        if (content) return (0,aria_hidden__WEBPACK_IMPORTED_MODULE_11__.hideOthers)(content);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: context.open,
        disableOutsideScroll: true,
        onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onFocusOutside, (event)=>event.preventDefault(), {
            checkForDefaultPrevented: false
        }),
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var MenuRootContentNonModal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        disableOutsideScroll: false,
        onDismiss: ()=>context.onOpenChange(false)
    });
});
var MenuContentImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, loop = false, trapFocus, onOpenAutoFocus, onCloseAutoFocus, disableOutsidePointerEvents, onEntryFocus, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, disableOutsideScroll, ...contentProps } = props;
    const context = useMenuContext(CONTENT_NAME, __scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const getItems = useCollection(__scopeMenu);
    const [currentItemId, setCurrentItemId] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__.useComposedRefs)(forwardedRef, contentRef, context.onContentChange);
    const timerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const searchRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("");
    const pointerGraceTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pointerGraceIntentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const pointerDirRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("right");
    const lastPointerXRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const ScrollLockWrapper = disableOutsideScroll ? react_remove_scroll__WEBPACK_IMPORTED_MODULE_13__["default"] : react__WEBPACK_IMPORTED_MODULE_0__.Fragment;
    const scrollLockWrapperProps = disableOutsideScroll ? {
        as: _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_14__.Slot,
        allowPinchZoom: true
    } : void 0;
    const handleTypeaheadSearch = (key)=>{
        const search = searchRef.current + key;
        const items = getItems().filter((item)=>!item.disabled);
        const currentItem = document.activeElement;
        const currentMatch = items.find((item)=>item.ref.current === currentItem)?.textValue;
        const values = items.map((item)=>item.textValue);
        const nextMatch = getNextMatch(values, search, currentMatch);
        const newItem = items.find((item)=>item.textValue === nextMatch)?.ref.current;
        (function updateSearch(value) {
            searchRef.current = value;
            window.clearTimeout(timerRef.current);
            if (value !== "") timerRef.current = window.setTimeout(()=>updateSearch(""), 1e3);
        })(search);
        if (newItem) {
            setTimeout(()=>newItem.focus());
        }
    };
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        return ()=>window.clearTimeout(timerRef.current);
    }, []);
    (0,_radix_ui_react_focus_guards__WEBPACK_IMPORTED_MODULE_15__.useFocusGuards)();
    const isPointerMovingToSubmenu = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
        const isMovingTowards = pointerDirRef.current === pointerGraceIntentRef.current?.side;
        return isMovingTowards && isPointerInGraceArea(event, pointerGraceIntentRef.current?.area);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuContentProvider, {
        scope: __scopeMenu,
        searchRef,
        onItemEnter: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        onItemLeave: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) return;
            contentRef.current?.focus();
            setCurrentItemId(null);
        }, [
            isPointerMovingToSubmenu
        ]),
        onTriggerLeave: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
            if (isPointerMovingToSubmenu(event)) event.preventDefault();
        }, [
            isPointerMovingToSubmenu
        ]),
        pointerGraceTimerRef,
        onPointerGraceIntentChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((intent)=>{
            pointerGraceIntentRef.current = intent;
        }, []),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ScrollLockWrapper, {
            ...scrollLockWrapperProps,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_focus_scope__WEBPACK_IMPORTED_MODULE_16__.FocusScope, {
                asChild: true,
                trapped: trapFocus,
                onMountAutoFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(onOpenAutoFocus, (event)=>{
                    event.preventDefault();
                    contentRef.current?.focus({
                        preventScroll: true
                    });
                }),
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_17__.DismissableLayer, {
                    asChild: true,
                    disableOutsidePointerEvents,
                    onEscapeKeyDown,
                    onPointerDownOutside,
                    onFocusOutside,
                    onInteractOutside,
                    onDismiss,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_5__.Root, {
                        asChild: true,
                        ...rovingFocusGroupScope,
                        dir: rootContext.dir,
                        orientation: "vertical",
                        loop,
                        currentTabStopId: currentItemId,
                        onCurrentTabStopIdChange: setCurrentItemId,
                        onEntryFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(onEntryFocus, (event)=>{
                            if (!rootContext.isUsingKeyboardRef.current) event.preventDefault();
                        }),
                        preventScrollOnEntryFocus: true,
                        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.Content, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": getOpenState(context.open),
                            "data-radix-menu-content": "",
                            dir: rootContext.dir,
                            ...popperScope,
                            ...contentProps,
                            ref: composedRefs,
                            style: {
                                outline: "none",
                                ...contentProps.style
                            },
                            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(contentProps.onKeyDown, (event)=>{
                                const target = event.target;
                                const isKeyDownInside = target.closest("[data-radix-menu-content]") === event.currentTarget;
                                const isModifierKey = event.ctrlKey || event.altKey || event.metaKey;
                                const isCharacterKey = event.key.length === 1;
                                if (isKeyDownInside) {
                                    if (event.key === "Tab") event.preventDefault();
                                    if (!isModifierKey && isCharacterKey) handleTypeaheadSearch(event.key);
                                }
                                const content = contentRef.current;
                                if (event.target !== content) return;
                                if (!FIRST_LAST_KEYS.includes(event.key)) return;
                                event.preventDefault();
                                const items = getItems().filter((item)=>!item.disabled);
                                const candidateNodes = items.map((item)=>item.ref.current);
                                if (LAST_KEYS.includes(event.key)) candidateNodes.reverse();
                                focusFirst(candidateNodes);
                            }),
                            onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onBlur, (event)=>{
                                if (!event.currentTarget.contains(event.target)) {
                                    window.clearTimeout(timerRef.current);
                                    searchRef.current = "";
                                }
                            }),
                            onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerMove, whenMouse((event)=>{
                                const target = event.target;
                                const pointerXHasChanged = lastPointerXRef.current !== event.clientX;
                                if (event.currentTarget.contains(target) && pointerXHasChanged) {
                                    const newDir = event.clientX > lastPointerXRef.current ? "right" : "left";
                                    pointerDirRef.current = newDir;
                                    lastPointerXRef.current = event.clientX;
                                }
                            }))
                        })
                    })
                })
            })
        })
    });
});
MenuContent.displayName = CONTENT_NAME;
var GROUP_NAME = "MenuGroup";
var MenuGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, ...groupProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__.Primitive.div, {
        role: "group",
        ...groupProps,
        ref: forwardedRef
    });
});
MenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "MenuLabel";
var MenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, ...labelProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__.Primitive.div, {
        ...labelProps,
        ref: forwardedRef
    });
});
MenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "MenuItem";
var ITEM_SELECT = "menu.itemSelect";
var MenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { disabled = false, onSelect, ...itemProps } = props;
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const rootContext = useMenuRootContext(ITEM_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(ITEM_NAME, props.__scopeMenu);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__.useComposedRefs)(forwardedRef, ref);
    const isPointerDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const handleSelect = ()=>{
        const menuItem = ref.current;
        if (!disabled && menuItem) {
            const itemSelectEvent = new CustomEvent(ITEM_SELECT, {
                bubbles: true,
                cancelable: true
            });
            menuItem.addEventListener(ITEM_SELECT, (event)=>onSelect?.(event), {
                once: true
            });
            (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__.dispatchDiscreteCustomEvent)(menuItem, itemSelectEvent);
            if (itemSelectEvent.defaultPrevented) {
                isPointerDownRef.current = false;
            } else {
                rootContext.onClose();
            }
        }
    };
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuItemImpl, {
        ...itemProps,
        ref: composedRefs,
        disabled,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onClick, handleSelect),
        onPointerDown: (event)=>{
            props.onPointerDown?.(event);
            isPointerDownRef.current = true;
        },
        onPointerUp: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerUp, (event)=>{
            if (!isPointerDownRef.current) event.currentTarget?.click();
        }),
        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
            const isTypingAhead = contentContext.searchRef.current !== "";
            if (disabled || isTypingAhead && event.key === " ") return;
            if (SELECTION_KEYS.includes(event.key)) {
                event.currentTarget.click();
                event.preventDefault();
            }
        })
    });
});
MenuItem.displayName = ITEM_NAME;
var MenuItemImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, disabled = false, textValue, ...itemProps } = props;
    const contentContext = useMenuContentContext(ITEM_NAME, __scopeMenu);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeMenu);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__.useComposedRefs)(forwardedRef, ref);
    const [isFocused, setIsFocused] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [textContent, setTextContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const menuItem = ref.current;
        if (menuItem) {
            setTextContent((menuItem.textContent ?? "").trim());
        }
    }, [
        itemProps.children
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.ItemSlot, {
        scope: __scopeMenu,
        disabled,
        textValue: textValue ?? textContent,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_5__.Item, {
            asChild: true,
            ...rovingFocusGroupScope,
            focusable: !disabled,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__.Primitive.div, {
                role: "menuitem",
                "data-highlighted": isFocused ? "" : void 0,
                "aria-disabled": disabled || void 0,
                "data-disabled": disabled ? "" : void 0,
                ...itemProps,
                ref: composedRefs,
                onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerMove, whenMouse((event)=>{
                    if (disabled) {
                        contentContext.onItemLeave(event);
                    } else {
                        contentContext.onItemEnter(event);
                        if (!event.defaultPrevented) {
                            const item = event.currentTarget;
                            item.focus({
                                preventScroll: true
                            });
                        }
                    }
                })),
                onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, whenMouse((event)=>contentContext.onItemLeave(event))),
                onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onFocus, ()=>setIsFocused(true)),
                onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onBlur, ()=>setIsFocused(false))
            })
        })
    });
});
var CHECKBOX_ITEM_NAME = "MenuCheckboxItem";
var MenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { checked = false, onCheckedChange, ...checkboxItemProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuItem, {
            role: "menuitemcheckbox",
            "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
            ...checkboxItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(checkboxItemProps.onSelect, ()=>onCheckedChange?.(isIndeterminate(checked) ? true : !checked), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "MenuRadioGroup";
var [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME, {
    value: void 0,
    onValueChange: ()=>{}
});
var MenuRadioGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { value, onValueChange, ...groupProps } = props;
    const handleValueChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onValueChange);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RadioGroupProvider, {
        scope: props.__scopeMenu,
        value,
        onValueChange: handleValueChange,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuGroup, {
            ...groupProps,
            ref: forwardedRef
        })
    });
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "MenuRadioItem";
var MenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { value, ...radioItemProps } = props;
    const context = useRadioGroupContext(RADIO_ITEM_NAME, props.__scopeMenu);
    const checked = value === context.value;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ItemIndicatorProvider, {
        scope: props.__scopeMenu,
        checked,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuItem, {
            role: "menuitemradio",
            "aria-checked": checked,
            ...radioItemProps,
            ref: forwardedRef,
            "data-state": getCheckedState(checked),
            onSelect: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(radioItemProps.onSelect, ()=>context.onValueChange?.(value), {
                checkForDefaultPrevented: false
            })
        })
    });
});
MenuRadioItem.displayName = RADIO_ITEM_NAME;
var ITEM_INDICATOR_NAME = "MenuItemIndicator";
var [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, {
    checked: false
});
var MenuItemIndicator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, forceMount, ...itemIndicatorProps } = props;
    const indicatorContext = useItemIndicatorContext(ITEM_INDICATOR_NAME, __scopeMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
        present: forceMount || isIndeterminate(indicatorContext.checked) || indicatorContext.checked === true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__.Primitive.span, {
            ...itemIndicatorProps,
            ref: forwardedRef,
            "data-state": getCheckedState(indicatorContext.checked)
        })
    });
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME = "MenuSeparator";
var MenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, ...separatorProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_18__.Primitive.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...separatorProps,
        ref: forwardedRef
    });
});
MenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME = "MenuArrow";
var MenuArrow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeMenu, ...arrowProps } = props;
    const popperScope = usePopperScope(__scopeMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.Arrow, {
        ...popperScope,
        ...arrowProps,
        ref: forwardedRef
    });
});
MenuArrow.displayName = ARROW_NAME;
var SUB_NAME = "MenuSub";
var [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME);
var MenuSub = (props)=>{
    const { __scopeMenu, children, open = false, onOpenChange } = props;
    const parentMenuContext = useMenuContext(SUB_NAME, __scopeMenu);
    const popperScope = usePopperScope(__scopeMenu);
    const [trigger, setTrigger] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [content, setContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const handleOpenChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_6__.useCallbackRef)(onOpenChange);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (parentMenuContext.open === false) handleOpenChange(false);
        return ()=>handleOpenChange(false);
    }, [
        parentMenuContext.open,
        handleOpenChange
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_popper__WEBPACK_IMPORTED_MODULE_4__.Root, {
        ...popperScope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuProvider, {
            scope: __scopeMenu,
            open,
            onOpenChange: handleOpenChange,
            content,
            onContentChange: setContent,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuSubProvider, {
                scope: __scopeMenu,
                contentId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_19__.useId)(),
                triggerId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_19__.useId)(),
                trigger,
                onTriggerChange: setTrigger,
                children
            })
        })
    });
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME = "MenuSubTrigger";
var MenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useMenuContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const contentContext = useMenuContentContext(SUB_TRIGGER_NAME, props.__scopeMenu);
    const openTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { pointerGraceTimerRef, onPointerGraceIntentChange } = contentContext;
    const scope = {
        __scopeMenu: props.__scopeMenu
    };
    const clearOpenTimer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
    }, []);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>clearOpenTimer, [
        clearOpenTimer
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const pointerGraceTimer = pointerGraceTimerRef.current;
        return ()=>{
            window.clearTimeout(pointerGraceTimer);
            onPointerGraceIntentChange(null);
        };
    }, [
        pointerGraceTimerRef,
        onPointerGraceIntentChange
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuAnchor, {
        asChild: true,
        ...scope,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuItemImpl, {
            id: subContext.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": context.open,
            "aria-controls": subContext.contentId,
            "data-state": getOpenState(context.open),
            ...props,
            ref: (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__.composeRefs)(forwardedRef, subContext.onTriggerChange),
            onClick: (event)=>{
                props.onClick?.(event);
                if (props.disabled || event.defaultPrevented) return;
                event.currentTarget.focus();
                if (!context.open) context.onOpenChange(true);
            },
            onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerMove, whenMouse((event)=>{
                contentContext.onItemEnter(event);
                if (event.defaultPrevented) return;
                if (!props.disabled && !context.open && !openTimerRef.current) {
                    contentContext.onPointerGraceIntentChange(null);
                    openTimerRef.current = window.setTimeout(()=>{
                        context.onOpenChange(true);
                        clearOpenTimer();
                    }, 100);
                }
            })),
            onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, whenMouse((event)=>{
                clearOpenTimer();
                const contentRect = context.content?.getBoundingClientRect();
                if (contentRect) {
                    const side = context.content?.dataset.side;
                    const rightSide = side === "right";
                    const bleed = rightSide ? -5 : 5;
                    const contentNearEdge = contentRect[rightSide ? "left" : "right"];
                    const contentFarEdge = contentRect[rightSide ? "right" : "left"];
                    contentContext.onPointerGraceIntentChange({
                        area: [
                            // Apply a bleed on clientX to ensure that our exit point is
                            // consistently within polygon bounds
                            {
                                x: event.clientX + bleed,
                                y: event.clientY
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.top
                            },
                            {
                                x: contentFarEdge,
                                y: contentRect.bottom
                            },
                            {
                                x: contentNearEdge,
                                y: contentRect.bottom
                            }
                        ],
                        side
                    });
                    window.clearTimeout(pointerGraceTimerRef.current);
                    pointerGraceTimerRef.current = window.setTimeout(()=>contentContext.onPointerGraceIntentChange(null), 300);
                } else {
                    contentContext.onTriggerLeave(event);
                    if (event.defaultPrevented) return;
                    contentContext.onPointerGraceIntentChange(null);
                }
            })),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
                const isTypingAhead = contentContext.searchRef.current !== "";
                if (props.disabled || isTypingAhead && event.key === " ") return;
                if (SUB_OPEN_KEYS[rootContext.dir].includes(event.key)) {
                    context.onOpenChange(true);
                    context.content?.focus();
                    event.preventDefault();
                }
            })
        })
    });
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "MenuSubContent";
var MenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeMenu);
    const { forceMount = portalContext.forceMount, ...subContentProps } = props;
    const context = useMenuContext(CONTENT_NAME, props.__scopeMenu);
    const rootContext = useMenuRootContext(CONTENT_NAME, props.__scopeMenu);
    const subContext = useMenuSubContext(SUB_CONTENT_NAME, props.__scopeMenu);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_10__.useComposedRefs)(forwardedRef, ref);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Provider, {
        scope: props.__scopeMenu,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_8__.Presence, {
            present: forceMount || context.open,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Slot, {
                scope: props.__scopeMenu,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuContentImpl, {
                    id: subContext.contentId,
                    "aria-labelledby": subContext.triggerId,
                    ...subContentProps,
                    ref: composedRefs,
                    align: "start",
                    side: rootContext.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: false,
                    disableOutsideScroll: false,
                    trapFocus: false,
                    onOpenAutoFocus: (event)=>{
                        if (rootContext.isUsingKeyboardRef.current) ref.current?.focus();
                        event.preventDefault();
                    },
                    onCloseAutoFocus: (event)=>event.preventDefault(),
                    onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onFocusOutside, (event)=>{
                        if (event.target !== subContext.trigger) context.onOpenChange(false);
                    }),
                    onEscapeKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onEscapeKeyDown, (event)=>{
                        rootContext.onClose();
                        event.preventDefault();
                    }),
                    onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
                        const isKeyDownInside = event.currentTarget.contains(event.target);
                        const isCloseKey = SUB_CLOSE_KEYS[rootContext.dir].includes(event.key);
                        if (isKeyDownInside && isCloseKey) {
                            context.onOpenChange(false);
                            subContext.trigger?.focus();
                            event.preventDefault();
                        }
                    })
                })
            })
        })
    });
});
MenuSubContent.displayName = SUB_CONTENT_NAME;
function getOpenState(open) {
    return open ? "open" : "closed";
}
function isIndeterminate(checked) {
    return checked === "indeterminate";
}
function getCheckedState(checked) {
    return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
function getNextMatch(values, search, currentMatch) {
    const isRepeated = search.length > 1 && Array.from(search).every((char)=>char === search[0]);
    const normalizedSearch = isRepeated ? search[0] : search;
    const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
    let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
    const excludeCurrentMatch = normalizedSearch.length === 1;
    if (excludeCurrentMatch) wrappedValues = wrappedValues.filter((v)=>v !== currentMatch);
    const nextMatch = wrappedValues.find((value)=>value.toLowerCase().startsWith(normalizedSearch.toLowerCase()));
    return nextMatch !== currentMatch ? nextMatch : void 0;
}
function isPointInPolygon(point, polygon) {
    const { x, y } = point;
    let inside = false;
    for(let i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
        const xi = polygon[i].x;
        const yi = polygon[i].y;
        const xj = polygon[j].x;
        const yj = polygon[j].y;
        const intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
        if (intersect) inside = !inside;
    }
    return inside;
}
function isPointerInGraceArea(event, area) {
    if (!area) return false;
    const cursorPos = {
        x: event.clientX,
        y: event.clientY
    };
    return isPointInPolygon(cursorPos, area);
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root3 = Menu;
var Anchor2 = MenuAnchor;
var Portal = MenuPortal;
var Content2 = MenuContent;
var Group = MenuGroup;
var Label = MenuLabel;
var Item2 = MenuItem;
var CheckboxItem = MenuCheckboxItem;
var RadioGroup = MenuRadioGroup;
var RadioItem = MenuRadioItem;
var ItemIndicator = MenuItemIndicator;
var Separator = MenuSeparator;
var Arrow2 = MenuArrow;
var Sub = MenuSub;
var SubTrigger = MenuSubTrigger;
var SubContent = MenuSubContent;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs":
/*!***********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Indicator: () => (/* binding */ Indicator),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   NavigationMenu: () => (/* binding */ NavigationMenu),
/* harmony export */   NavigationMenuContent: () => (/* binding */ NavigationMenuContent),
/* harmony export */   NavigationMenuIndicator: () => (/* binding */ NavigationMenuIndicator),
/* harmony export */   NavigationMenuItem: () => (/* binding */ NavigationMenuItem),
/* harmony export */   NavigationMenuLink: () => (/* binding */ NavigationMenuLink),
/* harmony export */   NavigationMenuList: () => (/* binding */ NavigationMenuList),
/* harmony export */   NavigationMenuSub: () => (/* binding */ NavigationMenuSub),
/* harmony export */   NavigationMenuTrigger: () => (/* binding */ NavigationMenuTrigger),
/* harmony export */   NavigationMenuViewport: () => (/* binding */ NavigationMenuViewport),
/* harmony export */   Root: () => (/* binding */ Root2),
/* harmony export */   Sub: () => (/* binding */ Sub),
/* harmony export */   Trigger: () => (/* binding */ Trigger),
/* harmony export */   Viewport: () => (/* binding */ Viewport),
/* harmony export */   createNavigationMenuScope: () => (/* binding */ createNavigationMenuScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-use-controllable-state */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-direction */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-direction/dist/index.mjs");
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @radix-ui/react-presence */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-presence/dist/index.mjs");
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-id */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs");
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-collection */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-collection/dist/index.mjs");
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @radix-ui/react-dismissable-layer */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/react-use-previous */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-previous/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @radix-ui/react-visually-hidden */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Content,Indicator,Item,Link,List,NavigationMenu,NavigationMenuContent,NavigationMenuIndicator,NavigationMenuItem,NavigationMenuLink,NavigationMenuList,NavigationMenuSub,NavigationMenuTrigger,NavigationMenuViewport,Root,Sub,Trigger,Viewport,createNavigationMenuScope auto */ // packages/react/navigation-menu/src/NavigationMenu.tsx

















var NAVIGATION_MENU_NAME = "NavigationMenu";
var [Collection, useCollection, createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__.createCollection)(NAVIGATION_MENU_NAME);
var [FocusGroupCollection, useFocusGroupCollection, createFocusGroupCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__.createCollection)(NAVIGATION_MENU_NAME);
var [createNavigationMenuContext, createNavigationMenuScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__.createContextScope)(NAVIGATION_MENU_NAME, [
    createCollectionScope,
    createFocusGroupCollectionScope
]);
var [NavigationMenuProviderImpl, useNavigationMenuContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var [ViewportContentProvider, useViewportContentContext] = createNavigationMenuContext(NAVIGATION_MENU_NAME);
var NavigationMenu = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
    const [navigationMenu, setNavigationMenu] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRef = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, (node)=>setNavigationMenu(node));
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_6__.useDirection)(dir);
    const openTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const closeTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const skipDelayTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const [isOpenDelayed, setIsOpenDelayed] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);
    const [value = "", setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__.useControllableState)({
        prop: valueProp,
        onChange: (value2)=>{
            const isOpen = value2 !== "";
            const hasSkipDelayDuration = skipDelayDuration > 0;
            if (isOpen) {
                window.clearTimeout(skipDelayTimerRef.current);
                if (hasSkipDelayDuration) setIsOpenDelayed(false);
            } else {
                window.clearTimeout(skipDelayTimerRef.current);
                skipDelayTimerRef.current = window.setTimeout(()=>setIsOpenDelayed(true), skipDelayDuration);
            }
            onValueChange?.(value2);
        },
        defaultProp: defaultValue
    });
    const startCloseTimer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = window.setTimeout(()=>setValue(""), 150);
    }, [
        setValue
    ]);
    const handleOpen = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((itemValue)=>{
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
    }, [
        setValue
    ]);
    const handleDelayedOpen = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((itemValue)=>{
        const isOpenItem = value === itemValue;
        if (isOpenItem) {
            window.clearTimeout(closeTimerRef.current);
        } else {
            openTimerRef.current = window.setTimeout(()=>{
                window.clearTimeout(closeTimerRef.current);
                setValue(itemValue);
            }, delayDuration);
        }
    }, [
        value,
        setValue,
        delayDuration
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        return ()=>{
            window.clearTimeout(openTimerRef.current);
            window.clearTimeout(closeTimerRef.current);
            window.clearTimeout(skipDelayTimerRef.current);
        };
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: true,
        value,
        dir: direction,
        orientation,
        rootNavigationMenu: navigationMenu,
        onTriggerEnter: (itemValue)=>{
            window.clearTimeout(openTimerRef.current);
            if (isOpenDelayed) handleDelayedOpen(itemValue);
            else handleOpen(itemValue);
        },
        onTriggerLeave: ()=>{
            window.clearTimeout(openTimerRef.current);
            startCloseTimer();
        },
        onContentEnter: ()=>window.clearTimeout(closeTimerRef.current),
        onContentLeave: startCloseTimer,
        onItemSelect: (itemValue)=>{
            setValue((prevValue)=>prevValue === itemValue ? "" : itemValue);
        },
        onItemDismiss: ()=>setValue(""),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.nav, {
            "aria-label": "Main",
            "data-orientation": orientation,
            dir: direction,
            ...NavigationMenuProps,
            ref: composedRef
        })
    });
});
NavigationMenu.displayName = NAVIGATION_MENU_NAME;
var SUB_NAME = "NavigationMenuSub";
var NavigationMenuSub = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", ...subProps } = props;
    const context = useNavigationMenuContext(SUB_NAME, __scopeNavigationMenu);
    const [value = "", setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__.useControllableState)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuProvider, {
        scope: __scopeNavigationMenu,
        isRootMenu: false,
        value,
        dir: context.dir,
        orientation,
        rootNavigationMenu: context.rootNavigationMenu,
        onTriggerEnter: (itemValue)=>setValue(itemValue),
        onItemSelect: (itemValue)=>setValue(itemValue),
        onItemDismiss: ()=>setValue(""),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.div, {
            "data-orientation": orientation,
            ...subProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuSub.displayName = SUB_NAME;
var NavigationMenuProvider = (props)=>{
    const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
    const [viewport, setViewport] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [viewportContent, setViewportContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(/* @__PURE__ */ new Map());
    const [indicatorTrack, setIndicatorTrack] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuProviderImpl, {
        scope,
        isRootMenu,
        rootNavigationMenu,
        value,
        previousValue: (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_9__.usePrevious)(value),
        baseId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.useId)(),
        dir,
        orientation,
        viewport,
        onViewportChange: setViewport,
        indicatorTrack,
        onIndicatorTrackChange: setIndicatorTrack,
        onTriggerEnter: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onTriggerEnter),
        onTriggerLeave: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onTriggerLeave),
        onContentEnter: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onContentEnter),
        onContentLeave: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onContentLeave),
        onItemSelect: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onItemSelect),
        onItemDismiss: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onItemDismiss),
        onViewportContentChange: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((contentValue, contentData)=>{
            setViewportContent((prevContent)=>{
                prevContent.set(contentValue, contentData);
                return new Map(prevContent);
            });
        }, []),
        onViewportContentRemove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((contentValue)=>{
            setViewportContent((prevContent)=>{
                if (!prevContent.has(contentValue)) return prevContent;
                prevContent.delete(contentValue);
                return new Map(prevContent);
            });
        }, []),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Provider, {
            scope,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ViewportContentProvider, {
                scope,
                items: viewportContent,
                children
            })
        })
    });
};
var LIST_NAME = "NavigationMenuList";
var NavigationMenuList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...listProps } = props;
    const context = useNavigationMenuContext(LIST_NAME, __scopeNavigationMenu);
    const list = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.ul, {
        "data-orientation": context.orientation,
        ...listProps,
        ref: forwardedRef
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.div, {
        style: {
            position: "relative"
        },
        ref: context.onIndicatorTrackChange,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Slot, {
            scope: __scopeNavigationMenu,
            children: context.isRootMenu ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroup, {
                asChild: true,
                children: list
            }) : list
        })
    });
});
NavigationMenuList.displayName = LIST_NAME;
var ITEM_NAME = "NavigationMenuItem";
var [NavigationMenuItemContextProvider, useNavigationMenuItemContext] = createNavigationMenuContext(ITEM_NAME);
var NavigationMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
    const autoValue = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.useId)();
    const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
    const contentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const triggerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const focusProxyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const restoreContentTabOrderRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(()=>{});
    const wasEscapeCloseRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const handleContentEntry = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((side = "start")=>{
        if (contentRef.current) {
            restoreContentTabOrderRef.current();
            const candidates = getTabbableCandidates(contentRef.current);
            if (candidates.length) focusFirst(side === "start" ? candidates : candidates.reverse());
        }
    }, []);
    const handleContentExit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        if (contentRef.current) {
            const candidates = getTabbableCandidates(contentRef.current);
            if (candidates.length) restoreContentTabOrderRef.current = removeFromTabOrder(candidates);
        }
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuItemContextProvider, {
        scope: __scopeNavigationMenu,
        value,
        triggerRef,
        contentRef,
        focusProxyRef,
        wasEscapeCloseRef,
        onEntryKeyDown: handleContentEntry,
        onFocusProxyEnter: handleContentEntry,
        onRootContentClose: handleContentExit,
        onContentFocusOutside: handleContentExit,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.li, {
            ...itemProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuItem.displayName = ITEM_NAME;
var TRIGGER_NAME = "NavigationMenuTrigger";
var NavigationMenuTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
    const context = useNavigationMenuContext(TRIGGER_NAME, props.__scopeNavigationMenu);
    const itemContext = useNavigationMenuItemContext(TRIGGER_NAME, props.__scopeNavigationMenu);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(ref, itemContext.triggerRef, forwardedRef);
    const triggerId = makeTriggerId(context.baseId, itemContext.value);
    const contentId = makeContentId(context.baseId, itemContext.value);
    const hasPointerMoveOpenedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const wasClickCloseRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const open = itemContext.value === context.value;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.ItemSlot, {
                scope: __scopeNavigationMenu,
                value: itemContext.value,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroupItem, {
                    asChild: true,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.button, {
                        id: triggerId,
                        disabled,
                        "data-disabled": disabled ? "" : void 0,
                        "data-state": getOpenState(open),
                        "aria-expanded": open,
                        "aria-controls": contentId,
                        ...triggerProps,
                        ref: composedRefs,
                        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerEnter, ()=>{
                            wasClickCloseRef.current = false;
                            itemContext.wasEscapeCloseRef.current = false;
                        }),
                        onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerMove, whenMouse(()=>{
                            if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current) return;
                            context.onTriggerEnter(itemContext.value);
                            hasPointerMoveOpenedRef.current = true;
                        })),
                        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, whenMouse(()=>{
                            if (disabled) return;
                            context.onTriggerLeave();
                            hasPointerMoveOpenedRef.current = false;
                        })),
                        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onClick, ()=>{
                            context.onItemSelect(itemContext.value);
                            wasClickCloseRef.current = open;
                        }),
                        onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
                            const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
                            const entryKey = {
                                horizontal: "ArrowDown",
                                vertical: verticalEntryKey
                            }[context.orientation];
                            if (open && event.key === entryKey) {
                                itemContext.onEntryKeyDown();
                                event.preventDefault();
                            }
                        })
                    })
                })
            }),
            open && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_13__.Root, {
                        "aria-hidden": true,
                        tabIndex: 0,
                        ref: itemContext.focusProxyRef,
                        onFocus: (event)=>{
                            const content = itemContext.contentRef.current;
                            const prevFocusedElement = event.relatedTarget;
                            const wasTriggerFocused = prevFocusedElement === ref.current;
                            const wasFocusFromContent = content?.contains(prevFocusedElement);
                            if (wasTriggerFocused || !wasFocusFromContent) {
                                itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
                            }
                        }
                    }),
                    context.viewport && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        "aria-owns": contentId
                    })
                ]
            })
        ]
    });
});
NavigationMenuTrigger.displayName = TRIGGER_NAME;
var LINK_NAME = "NavigationMenuLink";
var LINK_SELECT = "navigationMenu.linkSelect";
var NavigationMenuLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroupItem, {
        asChild: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.a, {
            "data-active": active ? "" : void 0,
            "aria-current": active ? "page" : void 0,
            ...linkProps,
            ref: forwardedRef,
            onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onClick, (event)=>{
                const target = event.target;
                const linkSelectEvent = new CustomEvent(LINK_SELECT, {
                    bubbles: true,
                    cancelable: true
                });
                target.addEventListener(LINK_SELECT, (event2)=>onSelect?.(event2), {
                    once: true
                });
                (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.dispatchDiscreteCustomEvent)(target, linkSelectEvent);
                if (!linkSelectEvent.defaultPrevented && !event.metaKey) {
                    const rootContentDismissEvent = new CustomEvent(ROOT_CONTENT_DISMISS, {
                        bubbles: true,
                        cancelable: true
                    });
                    (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.dispatchDiscreteCustomEvent)(target, rootContentDismissEvent);
                }
            }, {
                checkForDefaultPrevented: false
            })
        })
    });
});
NavigationMenuLink.displayName = LINK_NAME;
var INDICATOR_NAME = "NavigationMenuIndicator";
var NavigationMenuIndicator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...indicatorProps } = props;
    const context = useNavigationMenuContext(INDICATOR_NAME, props.__scopeNavigationMenu);
    const isVisible = Boolean(context.value);
    return context.indicatorTrack ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
        present: forceMount || isVisible,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuIndicatorImpl, {
            ...indicatorProps,
            ref: forwardedRef
        })
    }), context.indicatorTrack) : null;
});
NavigationMenuIndicator.displayName = INDICATOR_NAME;
var NavigationMenuIndicatorImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...indicatorProps } = props;
    const context = useNavigationMenuContext(INDICATOR_NAME, __scopeNavigationMenu);
    const getItems = useCollection(__scopeNavigationMenu);
    const [activeTrigger, setActiveTrigger] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const isHorizontal = context.orientation === "horizontal";
    const isVisible = Boolean(context.value);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const items = getItems();
        const triggerNode = items.find((item)=>item.value === context.value)?.ref.current;
        if (triggerNode) setActiveTrigger(triggerNode);
    }, [
        getItems,
        context.value
    ]);
    const handlePositionChange = ()=>{
        if (activeTrigger) {
            setPosition({
                size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
                offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
            });
        }
    };
    useResizeObserver(activeTrigger, handlePositionChange);
    useResizeObserver(context.indicatorTrack, handlePositionChange);
    return position ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.div, {
        "aria-hidden": true,
        "data-state": isVisible ? "visible" : "hidden",
        "data-orientation": context.orientation,
        ...indicatorProps,
        ref: forwardedRef,
        style: {
            position: "absolute",
            ...isHorizontal ? {
                left: 0,
                width: position.size + "px",
                transform: `translateX(${position.offset}px)`
            } : {
                top: 0,
                height: position.size + "px",
                transform: `translateY(${position.offset}px)`
            },
            ...indicatorProps.style
        }
    }) : null;
});
var CONTENT_NAME = "NavigationMenuContent";
var NavigationMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const itemContext = useNavigationMenuItemContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(itemContext.contentRef, forwardedRef);
    const open = itemContext.value === context.value;
    const commonProps = {
        value: itemContext.value,
        triggerRef: itemContext.triggerRef,
        focusProxyRef: itemContext.focusProxyRef,
        wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
        onContentFocusOutside: itemContext.onContentFocusOutside,
        onRootContentClose: itemContext.onRootContentClose,
        ...contentProps
    };
    return !context.viewport ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
        present: forceMount || open,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuContentImpl, {
            "data-state": getOpenState(open),
            ...commonProps,
            ref: composedRefs,
            onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerEnter, context.onContentEnter),
            onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, whenMouse(context.onContentLeave)),
            style: {
                // Prevent interaction when animating out
                pointerEvents: !open && context.isRootMenu ? "none" : void 0,
                ...commonProps.style
            }
        })
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ViewportContentMounter, {
        forceMount,
        ...commonProps,
        ref: composedRefs
    });
});
NavigationMenuContent.displayName = CONTENT_NAME;
var ViewportContentMounter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const context = useNavigationMenuContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const { onViewportContentChange, onViewportContentRemove } = context;
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(()=>{
        onViewportContentChange(props.value, {
            ref: forwardedRef,
            ...props
        });
    }, [
        props,
        forwardedRef,
        onViewportContentChange
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(()=>{
        return ()=>onViewportContentRemove(props.value);
    }, [
        props.value,
        onViewportContentRemove
    ]);
    return null;
});
var ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var NavigationMenuContentImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
    const context = useNavigationMenuContext(CONTENT_NAME, __scopeNavigationMenu);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(ref, forwardedRef);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const getItems = useCollection(__scopeNavigationMenu);
    const prevMotionAttributeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { onItemDismiss } = context;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const content = ref.current;
        if (context.isRootMenu && content) {
            const handleClose = ()=>{
                onItemDismiss();
                onRootContentClose();
                if (content.contains(document.activeElement)) triggerRef.current?.focus();
            };
            content.addEventListener(ROOT_CONTENT_DISMISS, handleClose);
            return ()=>content.removeEventListener(ROOT_CONTENT_DISMISS, handleClose);
        }
    }, [
        context.isRootMenu,
        props.value,
        triggerRef,
        onItemDismiss,
        onRootContentClose
    ]);
    const motionAttribute = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        const items = getItems();
        const values = items.map((item)=>item.value);
        if (context.dir === "rtl") values.reverse();
        const index = values.indexOf(context.value);
        const prevIndex = values.indexOf(context.previousValue);
        const isSelected = value === context.value;
        const wasSelected = prevIndex === values.indexOf(value);
        if (!isSelected && !wasSelected) return prevMotionAttributeRef.current;
        const attribute = (()=>{
            if (index !== prevIndex) {
                if (isSelected && prevIndex !== -1) return index > prevIndex ? "from-end" : "from-start";
                if (wasSelected && index !== -1) return index > prevIndex ? "to-start" : "to-end";
            }
            return null;
        })();
        prevMotionAttributeRef.current = attribute;
        return attribute;
    }, [
        context.previousValue,
        context.value,
        context.dir,
        getItems,
        value
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroup, {
        asChild: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_16__.DismissableLayer, {
            id: contentId,
            "aria-labelledby": triggerId,
            "data-motion": motionAttribute,
            "data-orientation": context.orientation,
            ...contentProps,
            ref: composedRefs,
            disableOutsidePointerEvents: false,
            onDismiss: ()=>{
                const rootContentDismissEvent = new Event(ROOT_CONTENT_DISMISS, {
                    bubbles: true,
                    cancelable: true
                });
                ref.current?.dispatchEvent(rootContentDismissEvent);
            },
            onFocusOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onFocusOutside, (event)=>{
                onContentFocusOutside();
                const target = event.target;
                if (context.rootNavigationMenu?.contains(target)) event.preventDefault();
            }),
            onPointerDownOutside: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerDownOutside, (event)=>{
                const target = event.target;
                const isTrigger = getItems().some((item)=>item.ref.current?.contains(target));
                const isRootViewport = context.isRootMenu && context.viewport?.contains(target);
                if (isTrigger || isRootViewport || !context.isRootMenu) event.preventDefault();
            }),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
                const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
                const isTabKey = event.key === "Tab" && !isMetaKey;
                if (isTabKey) {
                    const candidates = getTabbableCandidates(event.currentTarget);
                    const focusedElement = document.activeElement;
                    const index = candidates.findIndex((candidate)=>candidate === focusedElement);
                    const isMovingBackwards = event.shiftKey;
                    const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
                    if (focusFirst(nextCandidates)) {
                        event.preventDefault();
                    } else {
                        focusProxyRef.current?.focus();
                    }
                }
            }),
            onEscapeKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onEscapeKeyDown, (event)=>{
                wasEscapeCloseRef.current = true;
            })
        })
    });
});
var VIEWPORT_NAME = "NavigationMenuViewport";
var NavigationMenuViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...viewportProps } = props;
    const context = useNavigationMenuContext(VIEWPORT_NAME, props.__scopeNavigationMenu);
    const open = Boolean(context.value);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
        present: forceMount || open,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuViewportImpl, {
            ...viewportProps,
            ref: forwardedRef
        })
    });
});
NavigationMenuViewport.displayName = VIEWPORT_NAME;
var NavigationMenuViewportImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, children, ...viewportImplProps } = props;
    const context = useNavigationMenuContext(VIEWPORT_NAME, __scopeNavigationMenu);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, context.onViewportChange);
    const viewportContentContext = useViewportContentContext(CONTENT_NAME, props.__scopeNavigationMenu);
    const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [content, setContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const viewportWidth = size ? size?.width + "px" : void 0;
    const viewportHeight = size ? size?.height + "px" : void 0;
    const open = Boolean(context.value);
    const activeContentValue = open ? context.value : context.previousValue;
    const handleSizeChange = ()=>{
        if (content) setSize({
            width: content.offsetWidth,
            height: content.offsetHeight
        });
    };
    useResizeObserver(content, handleSizeChange);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.div, {
        "data-state": getOpenState(open),
        "data-orientation": context.orientation,
        ...viewportImplProps,
        ref: composedRefs,
        style: {
            // Prevent interaction when animating out
            pointerEvents: !open && context.isRootMenu ? "none" : void 0,
            ["--radix-navigation-menu-viewport-width"]: viewportWidth,
            ["--radix-navigation-menu-viewport-height"]: viewportHeight,
            ...viewportImplProps.style
        },
        onPointerEnter: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerEnter, context.onContentEnter),
        onPointerLeave: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerLeave, whenMouse(context.onContentLeave)),
        children: Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props2 }])=>{
            const isActive = activeContentValue === value;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_14__.Presence, {
                present: forceMount || isActive,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NavigationMenuContentImpl, {
                    ...props2,
                    ref: (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.composeRefs)(ref, (node)=>{
                        if (isActive && node) setContent(node);
                    })
                })
            }, value);
        })
    });
});
var FOCUS_GROUP_NAME = "FocusGroup";
var FocusGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...groupProps } = props;
    const context = useNavigationMenuContext(FOCUS_GROUP_NAME, __scopeNavigationMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroupCollection.Provider, {
        scope: __scopeNavigationMenu,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroupCollection.Slot, {
            scope: __scopeNavigationMenu,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.div, {
                dir: context.dir,
                ...groupProps,
                ref: forwardedRef
            })
        })
    });
});
var ARROW_KEYS = [
    "ArrowRight",
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown"
];
var FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var FocusGroupItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeNavigationMenu, ...groupProps } = props;
    const getItems = useFocusGroupCollection(__scopeNavigationMenu);
    const context = useNavigationMenuContext(FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusGroupCollection.ItemSlot, {
        scope: __scopeNavigationMenu,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.button, {
            ...groupProps,
            ref: forwardedRef,
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
                const isFocusNavigationKey = [
                    "Home",
                    "End",
                    ...ARROW_KEYS
                ].includes(event.key);
                if (isFocusNavigationKey) {
                    let candidateNodes = getItems().map((item)=>item.ref.current);
                    const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
                    const prevKeys = [
                        prevItemKey,
                        "ArrowUp",
                        "End"
                    ];
                    if (prevKeys.includes(event.key)) candidateNodes.reverse();
                    if (ARROW_KEYS.includes(event.key)) {
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                    event.preventDefault();
                }
            })
        })
    });
});
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function focusFirst(candidates) {
    const previouslyFocusedElement = document.activeElement;
    return candidates.some((candidate)=>{
        if (candidate === previouslyFocusedElement) return true;
        candidate.focus();
        return document.activeElement !== previouslyFocusedElement;
    });
}
function removeFromTabOrder(candidates) {
    candidates.forEach((candidate)=>{
        candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
        candidate.setAttribute("tabindex", "-1");
    });
    return ()=>{
        candidates.forEach((candidate)=>{
            const prevTabIndex = candidate.dataset.tabindex;
            candidate.setAttribute("tabindex", prevTabIndex);
        });
    };
}
function useResizeObserver(element, onResize) {
    const handleResize = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(onResize);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_15__.useLayoutEffect)(()=>{
        let rAF = 0;
        if (element) {
            const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
function getOpenState(open) {
    return open ? "open" : "closed";
}
function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
function whenMouse(handler) {
    return (event)=>event.pointerType === "mouse" ? handler(event) : void 0;
}
var Root2 = NavigationMenu;
var Sub = NavigationMenuSub;
var List = NavigationMenuList;
var Item = NavigationMenuItem;
var Trigger = NavigationMenuTrigger;
var Link = NavigationMenuLink;
var Indicator = NavigationMenuIndicator;
var Content = NavigationMenuContent;
var Viewport = NavigationMenuViewport;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-popper/dist/index.mjs":
/*!**************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-popper/dist/index.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALIGN_OPTIONS: () => (/* binding */ ALIGN_OPTIONS),
/* harmony export */   Anchor: () => (/* binding */ Anchor),
/* harmony export */   Arrow: () => (/* binding */ Arrow),
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   Popper: () => (/* binding */ Popper),
/* harmony export */   PopperAnchor: () => (/* binding */ PopperAnchor),
/* harmony export */   PopperArrow: () => (/* binding */ PopperArrow),
/* harmony export */   PopperContent: () => (/* binding */ PopperContent),
/* harmony export */   Root: () => (/* binding */ Root2),
/* harmony export */   SIDE_OPTIONS: () => (/* binding */ SIDE_OPTIONS),
/* harmony export */   createPopperScope: () => (/* binding */ createPopperScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @floating-ui/react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @floating-ui/react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _radix_ui_react_arrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-arrow */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-arrow/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-use-size */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-size/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ ALIGN_OPTIONS,Anchor,Arrow,Content,Popper,PopperAnchor,PopperArrow,PopperContent,Root,SIDE_OPTIONS,createPopperScope auto */ // packages/react/popper/src/Popper.tsx










var SIDE_OPTIONS = [
    "top",
    "right",
    "bottom",
    "left"
];
var ALIGN_OPTIONS = [
    "start",
    "center",
    "end"
];
var POPPER_NAME = "Popper";
var [createPopperContext, createPopperScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.createContextScope)(POPPER_NAME);
var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
var Popper = (props)=>{
    const { __scopePopper, children } = props;
    const [anchor, setAnchor] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopperProvider, {
        scope: __scopePopper,
        anchor,
        onAnchorChange: setAnchor,
        children
    });
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME = "PopperAnchor";
var PopperAnchor = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopper, virtualRef, ...anchorProps } = props;
    const context = usePopperContext(ANCHOR_NAME, __scopePopper);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, ref);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        context.onAnchorChange(virtualRef?.current || ref.current);
    });
    return virtualRef ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.Primitive.div, {
        ...anchorProps,
        ref: composedRefs
    });
});
PopperAnchor.displayName = ANCHOR_NAME;
var CONTENT_NAME = "PopperContent";
var [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME);
var PopperContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopePopper, side = "bottom", sideOffset = 0, align = "center", alignOffset = 0, arrowPadding = 0, avoidCollisions = true, collisionBoundary = [], collisionPadding: collisionPaddingProp = 0, sticky = "partial", hideWhenDetached = false, updatePositionStrategy = "optimized", onPlaced, ...contentProps } = props;
    const context = usePopperContext(CONTENT_NAME, __scopePopper);
    const [content, setContent] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.useComposedRefs)(forwardedRef, (node)=>setContent(node));
    const [arrow, setArrow] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const arrowSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_5__.useSize)(arrow);
    const arrowWidth = arrowSize?.width ?? 0;
    const arrowHeight = arrowSize?.height ?? 0;
    const desiredPlacement = side + (align !== "center" ? "-" + align : "");
    const collisionPadding = typeof collisionPaddingProp === "number" ? collisionPaddingProp : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...collisionPaddingProp
    };
    const boundary = Array.isArray(collisionBoundary) ? collisionBoundary : [
        collisionBoundary
    ];
    const hasExplicitBoundaries = boundary.length > 0;
    const detectOverflowOptions = {
        padding: collisionPadding,
        boundary: boundary.filter(isNotNull),
        // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
        altBoundary: hasExplicitBoundaries
    };
    const { refs, floatingStyles, placement, isPositioned, middlewareData } = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.useFloating)({
        // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
        strategy: "fixed",
        placement: desiredPlacement,
        whileElementsMounted: (...args)=>{
            const cleanup = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_7__.autoUpdate)(...args, {
                animationFrame: updatePositionStrategy === "always"
            });
            return cleanup;
        },
        elements: {
            reference: context.anchor
        },
        middleware: [
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.offset)({
                mainAxis: sideOffset + arrowHeight,
                alignmentAxis: alignOffset
            }),
            avoidCollisions && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.shift)({
                mainAxis: true,
                crossAxis: false,
                limiter: sticky === "partial" ? (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.limitShift)() : void 0,
                ...detectOverflowOptions
            }),
            avoidCollisions && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.flip)({
                ...detectOverflowOptions
            }),
            (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.size)({
                ...detectOverflowOptions,
                apply: ({ elements, rects, availableWidth, availableHeight })=>{
                    const { width: anchorWidth, height: anchorHeight } = rects.reference;
                    const contentStyle = elements.floating.style;
                    contentStyle.setProperty("--radix-popper-available-width", `${availableWidth}px`);
                    contentStyle.setProperty("--radix-popper-available-height", `${availableHeight}px`);
                    contentStyle.setProperty("--radix-popper-anchor-width", `${anchorWidth}px`);
                    contentStyle.setProperty("--radix-popper-anchor-height", `${anchorHeight}px`);
                }
            }),
            arrow && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.arrow)({
                element: arrow,
                padding: arrowPadding
            }),
            transformOrigin({
                arrowWidth,
                arrowHeight
            }),
            hideWhenDetached && (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_6__.hide)({
                strategy: "referenceHidden",
                ...detectOverflowOptions
            })
        ]
    });
    const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
    const handlePlaced = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_8__.useCallbackRef)(onPlaced);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__.useLayoutEffect)(()=>{
        if (isPositioned) {
            handlePlaced?.();
        }
    }, [
        isPositioned,
        handlePlaced
    ]);
    const arrowX = middlewareData.arrow?.x;
    const arrowY = middlewareData.arrow?.y;
    const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
    const [contentZIndex, setContentZIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_9__.useLayoutEffect)(()=>{
        if (content) setContentZIndex(window.getComputedStyle(content).zIndex);
    }, [
        content
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        ref: refs.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...floatingStyles,
            transform: isPositioned ? floatingStyles.transform : "translate(0, -200%)",
            // keep off the page when measuring
            minWidth: "max-content",
            zIndex: contentZIndex,
            ["--radix-popper-transform-origin"]: [
                middlewareData.transformOrigin?.x,
                middlewareData.transformOrigin?.y
            ].join(" "),
            // hide the content if using the hide middleware and should be hidden
            // set visibility to hidden and disable pointer events so the UI behaves
            // as if the PopperContent isn't there at all
            ...middlewareData.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: props.dir,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PopperContentProvider, {
            scope: __scopePopper,
            placedSide,
            onArrowChange: setArrow,
            arrowX,
            arrowY,
            shouldHideArrow: cannotCenterArrow,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.Primitive.div, {
                "data-side": placedSide,
                "data-align": placedAlign,
                ...contentProps,
                ref: composedRefs,
                style: {
                    ...contentProps.style,
                    // if the PopperContent hasn't been placed yet (not all measurements done)
                    // we prevent animations so that users's animation don't kick in too early referring wrong sides
                    animation: !isPositioned ? "none" : void 0
                }
            })
        })
    });
});
PopperContent.displayName = CONTENT_NAME;
var ARROW_NAME = "PopperArrow";
var OPPOSITE_SIDE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
};
var PopperArrow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function PopperArrow2(props, forwardedRef) {
    const { __scopePopper, ...arrowProps } = props;
    const contentContext = useContentContext(ARROW_NAME, __scopePopper);
    const baseSide = OPPOSITE_SIDE[contentContext.placedSide];
    return(// we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        ref: contentContext.onArrowChange,
        style: {
            position: "absolute",
            left: contentContext.arrowX,
            top: contentContext.arrowY,
            [baseSide]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[contentContext.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: `rotate(180deg)`,
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[contentContext.placedSide],
            visibility: contentContext.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_arrow__WEBPACK_IMPORTED_MODULE_10__.Root, {
            ...arrowProps,
            ref: forwardedRef,
            style: {
                ...arrowProps.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
            }
        })
    }));
});
PopperArrow.displayName = ARROW_NAME;
function isNotNull(value) {
    return value !== null;
}
var transformOrigin = (options)=>({
        name: "transformOrigin",
        options,
        fn (data) {
            const { placement, rects, middlewareData } = data;
            const cannotCenterArrow = middlewareData.arrow?.centerOffset !== 0;
            const isArrowHidden = cannotCenterArrow;
            const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
            const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
            const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
            const noArrowAlign = {
                start: "0%",
                center: "50%",
                end: "100%"
            }[placedAlign];
            const arrowXCenter = (middlewareData.arrow?.x ?? 0) + arrowWidth / 2;
            const arrowYCenter = (middlewareData.arrow?.y ?? 0) + arrowHeight / 2;
            let x = "";
            let y = "";
            if (placedSide === "bottom") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${-arrowHeight}px`;
            } else if (placedSide === "top") {
                x = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
                y = `${rects.floating.height + arrowHeight}px`;
            } else if (placedSide === "right") {
                x = `${-arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            } else if (placedSide === "left") {
                x = `${rects.floating.width + arrowHeight}px`;
                y = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
            }
            return {
                data: {
                    x,
                    y
                }
            };
        }
    });
function getSideAndAlignFromPlacement(placement) {
    const [side, align = "center"] = placement.split("-");
    return [
        side,
        align
    ];
}
var Root2 = Popper;
var Anchor = PopperAnchor;
var Content = PopperContent;
var Arrow = PopperArrow;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-portal/dist/index.mjs":
/*!**************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-portal/dist/index.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: () => (/* binding */ Portal),
/* harmony export */   Root: () => (/* binding */ Root)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Portal,Root auto */ // packages/react/portal/src/Portal.tsx





var PORTAL_NAME = "Portal";
var Portal = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__.Primitive.div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root = Portal;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!****************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Presence: () => (/* binding */ Presence)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
/* __next_internal_client_entry_do_not_use__ Presence auto */ // packages/react/presence/src/Presence.tsx




// packages/react/presence/src/useStateMachine.tsx

function useStateMachine(initialState, machine) {
    return react__WEBPACK_IMPORTED_MODULE_0__.useReducer((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// packages/react/presence/src/Presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);
    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
    const prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present);
    const prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if (node) {
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node && isCurrentAnimation) {
                    react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(()=>send("ANIMATION_END"));
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2)=>{
            if (node2) stylesRef.current = getComputedStyle(node2);
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs":
/*!*****************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primitive: () => (/* binding */ Primitive),
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   dispatchDiscreteCustomEvent: () => (/* binding */ dispatchDiscreteCustomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js");
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
// packages/react/primitive/src/Primitive.tsx




var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => target.dispatchEvent(event));
}
var Root = Primitive;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-roving-focus/dist/index.mjs":
/*!********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-roving-focus/dist/index.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   RovingFocusGroup: () => (/* binding */ RovingFocusGroup),
/* harmony export */   RovingFocusGroupItem: () => (/* binding */ RovingFocusGroupItem),
/* harmony export */   createRovingFocusGroupScope: () => (/* binding */ createRovingFocusGroupScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-collection */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-collection/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-id */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-id/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-use-controllable-state */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-direction */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-direction/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Item,Root,RovingFocusGroup,RovingFocusGroupItem,createRovingFocusGroupScope auto */ // packages/react/roving-focus/src/RovingFocusGroup.tsx











var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.createCollection)(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.createContextScope)(GROUP_NAME, [
    createCollectionScope
]);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Provider, {
        scope: props.__scopeRovingFocusGroup,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Slot, {
            scope: props.__scopeRovingFocusGroup,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RovingFocusGroupImpl, {
                ...props,
                ref: forwardedRef
            })
        })
    });
});
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, orientation, loop = false, dir, currentTabStopId: currentTabStopIdProp, defaultCurrentTabStopId, onCurrentTabStopIdChange, onEntryFocus, preventScrollOnEntryFocus = false, ...groupProps } = props;
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.useComposedRefs)(forwardedRef, ref);
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.useDirection)(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.useControllableState)({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId,
        onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const handleEntryFocus = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__.useCallbackRef)(onEntryFocus);
    const getItems = useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const [focusableItemsCount, setFocusableItemsCount] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
        }
    }, [
        handleEntryFocus
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation,
        dir: direction,
        loop,
        currentTabStopId,
        onItemFocus: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((tabStopId)=>setCurrentTabStopId(tabStopId), [
            setCurrentTabStopId
        ]),
        onItemShiftTab: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setIsTabbingBackOut(true), []),
        onFocusableItemAdd: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount + 1), []),
        onFocusableItemRemove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setFocusableItemsCount((prevCount)=>prevCount - 1), []),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.div, {
            tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
            "data-orientation": orientation,
            ...groupProps,
            ref: composedRefs,
            style: {
                outline: "none",
                ...props.style
            },
            onMouseDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.composeEventHandlers)(props.onMouseDown, ()=>{
                isClickFocusRef.current = true;
            }),
            onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.composeEventHandlers)(props.onFocus, (event)=>{
                const isKeyboardFocus = !isClickFocusRef.current;
                if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                    const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
                    event.currentTarget.dispatchEvent(entryFocusEvent);
                    if (!entryFocusEvent.defaultPrevented) {
                        const items = getItems().filter((item)=>item.focusable);
                        const activeItem = items.find((item)=>item.active);
                        const currentItem = items.find((item)=>item.id === currentTabStopId);
                        const candidateItems = [
                            activeItem,
                            currentItem,
                            ...items
                        ].filter(Boolean);
                        const candidateNodes = candidateItems.map((item)=>item.ref.current);
                        focusFirst(candidateNodes, preventScrollOnEntryFocus);
                    }
                }
                isClickFocusRef.current = false;
            }),
            onBlur: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.composeEventHandlers)(props.onBlur, ()=>setIsTabbingBackOut(false))
        })
    });
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup, focusable = true, active = false, tabStopId, ...itemProps } = props;
    const autoId = (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.useId)();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove } = context;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove();
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.Primitive.span, {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.composeEventHandlers)(props.onMouseDown, (event)=>{
                if (!focusable) event.preventDefault();
                else context.onItemFocus(id);
            }),
            onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.composeEventHandlers)(props.onFocus, ()=>context.onItemFocus(id)),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.composeEventHandlers)(props.onKeyDown, (event)=>{
                if (event.key === "Tab" && event.shiftKey) {
                    context.onItemShiftTab();
                    return;
                }
                if (event.target !== event.currentTarget) return;
                const focusIntent = getFocusIntent(event, context.orientation, context.dir);
                if (focusIntent !== void 0) {
                    if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                    event.preventDefault();
                    const items = getItems().filter((item)=>item.focusable);
                    let candidateNodes = items.map((item)=>item.ref.current);
                    if (focusIntent === "last") candidateNodes.reverse();
                    else if (focusIntent === "prev" || focusIntent === "next") {
                        if (focusIntent === "prev") candidateNodes.reverse();
                        const currentIndex = candidateNodes.indexOf(event.currentTarget);
                        candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                    }
                    setTimeout(()=>focusFirst(candidateNodes));
                }
            })
        })
    });
});
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function getDirectionAwareKey(key, dir) {
    if (dir !== "rtl") return key;
    return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
    const key = getDirectionAwareKey(event.key, dir);
    if (orientation === "vertical" && [
        "ArrowLeft",
        "ArrowRight"
    ].includes(key)) return void 0;
    if (orientation === "horizontal" && [
        "ArrowUp",
        "ArrowDown"
    ].includes(key)) return void 0;
    return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus({
            preventScroll
        });
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
function wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs":
/*!************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   Slot: () => (/* binding */ Slot),
/* harmony export */   Slottable: () => (/* binding */ Slottable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
// packages/react/slot/src/Slot.tsx



var Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);
        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.composeRefs)(forwardedRef, childrenRef) : childrenRef
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children });
};
function isSlottable(child) {
  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root = Slot;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-toast/dist/index.mjs":
/*!*************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-toast/dist/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   Close: () => (/* binding */ Close),
/* harmony export */   Description: () => (/* binding */ Description),
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   Root: () => (/* binding */ Root2),
/* harmony export */   Title: () => (/* binding */ Title),
/* harmony export */   Toast: () => (/* binding */ Toast),
/* harmony export */   ToastAction: () => (/* binding */ ToastAction),
/* harmony export */   ToastClose: () => (/* binding */ ToastClose),
/* harmony export */   ToastDescription: () => (/* binding */ ToastDescription),
/* harmony export */   ToastProvider: () => (/* binding */ ToastProvider),
/* harmony export */   ToastTitle: () => (/* binding */ ToastTitle),
/* harmony export */   ToastViewport: () => (/* binding */ ToastViewport),
/* harmony export */   Viewport: () => (/* binding */ Viewport),
/* harmony export */   createToastScope: () => (/* binding */ createToastScope)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js");
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @radix-ui/primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var _radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-collection */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-collection/dist/index.mjs");
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-context */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-context/dist/index.mjs");
/* harmony import */ var _radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-dismissable-layer */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs");
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @radix-ui/react-portal */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-portal/dist/index.mjs");
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @radix-ui/react-presence */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-presence/dist/index.mjs");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/react-use-controllable-state */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
/* harmony import */ var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/react-visually-hidden */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
/* __next_internal_client_entry_do_not_use__ Action,Close,Description,Provider,Root,Title,Toast,ToastAction,ToastClose,ToastDescription,ToastProvider,ToastTitle,ToastViewport,Viewport,createToastScope auto */ // packages/react/toast/src/Toast.tsx















var PROVIDER_NAME = "ToastProvider";
var [Collection, useCollection, createCollectionScope] = (0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_3__.createCollection)("Toast");
var [createToastContext, createToastScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_4__.createContextScope)("Toast", [
    createCollectionScope
]);
var [ToastProviderProvider, useToastProviderContext] = createToastContext(PROVIDER_NAME);
var ToastProvider = (props)=>{
    const { __scopeToast, label = "Notification", duration = 5e3, swipeDirection = "right", swipeThreshold = 50, children } = props;
    const [viewport, setViewport] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const [toastCount, setToastCount] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const isFocusedToastEscapeKeyDownRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const isClosePausedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    if (!label.trim()) {
        console.error(`Invalid prop \`label\` supplied to \`${PROVIDER_NAME}\`. Expected non-empty \`string\`.`);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Provider, {
        scope: __scopeToast,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastProviderProvider, {
            scope: __scopeToast,
            label,
            duration,
            swipeDirection,
            swipeThreshold,
            toastCount,
            viewport,
            onViewportChange: setViewport,
            onToastAdd: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setToastCount((prevCount)=>prevCount + 1), []),
            onToastRemove: react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>setToastCount((prevCount)=>prevCount - 1), []),
            isFocusedToastEscapeKeyDownRef,
            isClosePausedRef,
            children
        })
    });
};
ToastProvider.displayName = PROVIDER_NAME;
var VIEWPORT_NAME = "ToastViewport";
var VIEWPORT_DEFAULT_HOTKEY = [
    "F8"
];
var VIEWPORT_PAUSE = "toast.viewportPause";
var VIEWPORT_RESUME = "toast.viewportResume";
var ToastViewport = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, hotkey = VIEWPORT_DEFAULT_HOTKEY, label = "Notifications ({hotkey})", ...viewportProps } = props;
    const context = useToastProviderContext(VIEWPORT_NAME, __scopeToast);
    const getItems = useCollection(__scopeToast);
    const wrapperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const headFocusProxyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const tailFocusProxyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, ref, context.onViewportChange);
    const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
    const hasToasts = context.toastCount > 0;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const handleKeyDown = (event)=>{
            const isHotkeyPressed = hotkey.every((key)=>event[key] || event.code === key);
            if (isHotkeyPressed) ref.current?.focus();
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>document.removeEventListener("keydown", handleKeyDown);
    }, [
        hotkey
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const wrapper = wrapperRef.current;
        const viewport = ref.current;
        if (hasToasts && wrapper && viewport) {
            const handlePause = ()=>{
                if (!context.isClosePausedRef.current) {
                    const pauseEvent = new CustomEvent(VIEWPORT_PAUSE);
                    viewport.dispatchEvent(pauseEvent);
                    context.isClosePausedRef.current = true;
                }
            };
            const handleResume = ()=>{
                if (context.isClosePausedRef.current) {
                    const resumeEvent = new CustomEvent(VIEWPORT_RESUME);
                    viewport.dispatchEvent(resumeEvent);
                    context.isClosePausedRef.current = false;
                }
            };
            const handleFocusOutResume = (event)=>{
                const isFocusMovingOutside = !wrapper.contains(event.relatedTarget);
                if (isFocusMovingOutside) handleResume();
            };
            const handlePointerLeaveResume = ()=>{
                const isFocusInside = wrapper.contains(document.activeElement);
                if (!isFocusInside) handleResume();
            };
            wrapper.addEventListener("focusin", handlePause);
            wrapper.addEventListener("focusout", handleFocusOutResume);
            wrapper.addEventListener("pointermove", handlePause);
            wrapper.addEventListener("pointerleave", handlePointerLeaveResume);
            window.addEventListener("blur", handlePause);
            window.addEventListener("focus", handleResume);
            return ()=>{
                wrapper.removeEventListener("focusin", handlePause);
                wrapper.removeEventListener("focusout", handleFocusOutResume);
                wrapper.removeEventListener("pointermove", handlePause);
                wrapper.removeEventListener("pointerleave", handlePointerLeaveResume);
                window.removeEventListener("blur", handlePause);
                window.removeEventListener("focus", handleResume);
            };
        }
    }, [
        hasToasts,
        context.isClosePausedRef
    ]);
    const getSortedTabbableCandidates = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(({ tabbingDirection })=>{
        const toastItems = getItems();
        const tabbableCandidates = toastItems.map((toastItem)=>{
            const toastNode = toastItem.ref.current;
            const toastTabbableCandidates = [
                toastNode,
                ...getTabbableCandidates(toastNode)
            ];
            return tabbingDirection === "forwards" ? toastTabbableCandidates : toastTabbableCandidates.reverse();
        });
        return (tabbingDirection === "forwards" ? tabbableCandidates.reverse() : tabbableCandidates).flat();
    }, [
        getItems
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const viewport = ref.current;
        if (viewport) {
            const handleKeyDown = (event)=>{
                const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
                const isTabKey = event.key === "Tab" && !isMetaKey;
                if (isTabKey) {
                    const focusedElement = document.activeElement;
                    const isTabbingBackwards = event.shiftKey;
                    const targetIsViewport = event.target === viewport;
                    if (targetIsViewport && isTabbingBackwards) {
                        headFocusProxyRef.current?.focus();
                        return;
                    }
                    const tabbingDirection = isTabbingBackwards ? "backwards" : "forwards";
                    const sortedCandidates = getSortedTabbableCandidates({
                        tabbingDirection
                    });
                    const index = sortedCandidates.findIndex((candidate)=>candidate === focusedElement);
                    if (focusFirst(sortedCandidates.slice(index + 1))) {
                        event.preventDefault();
                    } else {
                        isTabbingBackwards ? headFocusProxyRef.current?.focus() : tailFocusProxyRef.current?.focus();
                    }
                }
            };
            viewport.addEventListener("keydown", handleKeyDown);
            return ()=>viewport.removeEventListener("keydown", handleKeyDown);
        }
    }, [
        getItems,
        getSortedTabbableCandidates
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_6__.Branch, {
        ref: wrapperRef,
        role: "region",
        "aria-label": label.replace("{hotkey}", hotkeyLabel),
        tabIndex: -1,
        style: {
            pointerEvents: hasToasts ? void 0 : "none"
        },
        children: [
            hasToasts && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusProxy, {
                ref: headFocusProxyRef,
                onFocusFromOutsideViewport: ()=>{
                    const tabbableCandidates = getSortedTabbableCandidates({
                        tabbingDirection: "forwards"
                    });
                    focusFirst(tabbableCandidates);
                }
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.Slot, {
                scope: __scopeToast,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.ol, {
                    tabIndex: -1,
                    ...viewportProps,
                    ref: composedRefs
                })
            }),
            hasToasts && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusProxy, {
                ref: tailFocusProxyRef,
                onFocusFromOutsideViewport: ()=>{
                    const tabbableCandidates = getSortedTabbableCandidates({
                        tabbingDirection: "backwards"
                    });
                    focusFirst(tabbableCandidates);
                }
            })
        ]
    });
});
ToastViewport.displayName = VIEWPORT_NAME;
var FOCUS_PROXY_NAME = "ToastFocusProxy";
var FocusProxy = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, onFocusFromOutsideViewport, ...proxyProps } = props;
    const context = useToastProviderContext(FOCUS_PROXY_NAME, __scopeToast);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_8__.VisuallyHidden, {
        "aria-hidden": true,
        tabIndex: 0,
        ...proxyProps,
        ref: forwardedRef,
        style: {
            position: "fixed"
        },
        onFocus: (event)=>{
            const prevFocusedElement = event.relatedTarget;
            const isFocusFromOutsideViewport = !context.viewport?.contains(prevFocusedElement);
            if (isFocusFromOutsideViewport) onFocusFromOutsideViewport();
        }
    });
});
FocusProxy.displayName = FOCUS_PROXY_NAME;
var TOAST_NAME = "Toast";
var TOAST_SWIPE_START = "toast.swipeStart";
var TOAST_SWIPE_MOVE = "toast.swipeMove";
var TOAST_SWIPE_CANCEL = "toast.swipeCancel";
var TOAST_SWIPE_END = "toast.swipeEnd";
var Toast = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { forceMount, open: openProp, defaultOpen, onOpenChange, ...toastProps } = props;
    const [open = true, setOpen] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_9__.useControllableState)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_10__.Presence, {
        present: forceMount || open,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastImpl, {
            open,
            ...toastProps,
            ref: forwardedRef,
            onClose: ()=>setOpen(false),
            onPause: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(props.onPause),
            onResume: (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(props.onResume),
            onSwipeStart: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onSwipeStart, (event)=>{
                event.currentTarget.setAttribute("data-swipe", "start");
            }),
            onSwipeMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onSwipeMove, (event)=>{
                const { x, y } = event.detail.delta;
                event.currentTarget.setAttribute("data-swipe", "move");
                event.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x}px`);
                event.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${y}px`);
            }),
            onSwipeCancel: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onSwipeCancel, (event)=>{
                event.currentTarget.setAttribute("data-swipe", "cancel");
                event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
                event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
                event.currentTarget.style.removeProperty("--radix-toast-swipe-end-x");
                event.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
            }),
            onSwipeEnd: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onSwipeEnd, (event)=>{
                const { x, y } = event.detail.delta;
                event.currentTarget.setAttribute("data-swipe", "end");
                event.currentTarget.style.removeProperty("--radix-toast-swipe-move-x");
                event.currentTarget.style.removeProperty("--radix-toast-swipe-move-y");
                event.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x}px`);
                event.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${y}px`);
                setOpen(false);
            })
        })
    });
});
Toast.displayName = TOAST_NAME;
var [ToastInteractiveProvider, useToastInteractiveContext] = createToastContext(TOAST_NAME, {
    onClose () {}
});
var ToastImpl = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, type = "foreground", duration: durationProp, open, onClose, onEscapeKeyDown, onPause, onResume, onSwipeStart, onSwipeMove, onSwipeCancel, onSwipeEnd, ...toastProps } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_5__.useComposedRefs)(forwardedRef, (node2)=>setNode(node2));
    const pointerStartRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const swipeDeltaRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const duration = durationProp || context.duration;
    const closeTimerStartTimeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const closeTimerRemainingTimeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(duration);
    const closeTimerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const { onToastAdd, onToastRemove } = context;
    const handleClose = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(()=>{
        const isFocusInToast = node?.contains(document.activeElement);
        if (isFocusInToast) context.viewport?.focus();
        onClose();
    });
    const startTimer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((duration2)=>{
        if (!duration2 || duration2 === Infinity) return;
        window.clearTimeout(closeTimerRef.current);
        closeTimerStartTimeRef.current = /* @__PURE__ */ new Date().getTime();
        closeTimerRef.current = window.setTimeout(handleClose, duration2);
    }, [
        handleClose
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const viewport = context.viewport;
        if (viewport) {
            const handleResume = ()=>{
                startTimer(closeTimerRemainingTimeRef.current);
                onResume?.();
            };
            const handlePause = ()=>{
                const elapsedTime = /* @__PURE__ */ new Date().getTime() - closeTimerStartTimeRef.current;
                closeTimerRemainingTimeRef.current = closeTimerRemainingTimeRef.current - elapsedTime;
                window.clearTimeout(closeTimerRef.current);
                onPause?.();
            };
            viewport.addEventListener(VIEWPORT_PAUSE, handlePause);
            viewport.addEventListener(VIEWPORT_RESUME, handleResume);
            return ()=>{
                viewport.removeEventListener(VIEWPORT_PAUSE, handlePause);
                viewport.removeEventListener(VIEWPORT_RESUME, handleResume);
            };
        }
    }, [
        context.viewport,
        duration,
        onPause,
        onResume,
        startTimer
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (open && !context.isClosePausedRef.current) startTimer(duration);
    }, [
        open,
        duration,
        context.isClosePausedRef,
        startTimer
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        onToastAdd();
        return ()=>onToastRemove();
    }, [
        onToastAdd,
        onToastRemove
    ]);
    const announceTextContent = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        return node ? getAnnounceTextContent(node) : null;
    }, [
        node
    ]);
    if (!context.viewport) return null;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [
            announceTextContent && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastAnnounce, {
                __scopeToast,
                role: "status",
                "aria-live": type === "foreground" ? "assertive" : "polite",
                "aria-atomic": true,
                children: announceTextContent
            }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastInteractiveProvider, {
                scope: __scopeToast,
                onClose: handleClose,
                children: /*#__PURE__*/ react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Collection.ItemSlot, {
                    scope: __scopeToast,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_dismissable_layer__WEBPACK_IMPORTED_MODULE_6__.Root, {
                        asChild: true,
                        onEscapeKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(onEscapeKeyDown, ()=>{
                            if (!context.isFocusedToastEscapeKeyDownRef.current) handleClose();
                            context.isFocusedToastEscapeKeyDownRef.current = false;
                        }),
                        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.li, {
                            role: "status",
                            "aria-live": "off",
                            "aria-atomic": true,
                            tabIndex: 0,
                            "data-state": open ? "open" : "closed",
                            "data-swipe-direction": context.swipeDirection,
                            ...toastProps,
                            ref: composedRefs,
                            style: {
                                userSelect: "none",
                                touchAction: "none",
                                ...props.style
                            },
                            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onKeyDown, (event)=>{
                                if (event.key !== "Escape") return;
                                onEscapeKeyDown?.(event.nativeEvent);
                                if (!event.nativeEvent.defaultPrevented) {
                                    context.isFocusedToastEscapeKeyDownRef.current = true;
                                    handleClose();
                                }
                            }),
                            onPointerDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerDown, (event)=>{
                                if (event.button !== 0) return;
                                pointerStartRef.current = {
                                    x: event.clientX,
                                    y: event.clientY
                                };
                            }),
                            onPointerMove: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerMove, (event)=>{
                                if (!pointerStartRef.current) return;
                                const x = event.clientX - pointerStartRef.current.x;
                                const y = event.clientY - pointerStartRef.current.y;
                                const hasSwipeMoveStarted = Boolean(swipeDeltaRef.current);
                                const isHorizontalSwipe = [
                                    "left",
                                    "right"
                                ].includes(context.swipeDirection);
                                const clamp = [
                                    "left",
                                    "up"
                                ].includes(context.swipeDirection) ? Math.min : Math.max;
                                const clampedX = isHorizontalSwipe ? clamp(0, x) : 0;
                                const clampedY = !isHorizontalSwipe ? clamp(0, y) : 0;
                                const moveStartBuffer = event.pointerType === "touch" ? 10 : 2;
                                const delta = {
                                    x: clampedX,
                                    y: clampedY
                                };
                                const eventDetail = {
                                    originalEvent: event,
                                    delta
                                };
                                if (hasSwipeMoveStarted) {
                                    swipeDeltaRef.current = delta;
                                    handleAndDispatchCustomEvent(TOAST_SWIPE_MOVE, onSwipeMove, eventDetail, {
                                        discrete: false
                                    });
                                } else if (isDeltaInDirection(delta, context.swipeDirection, moveStartBuffer)) {
                                    swipeDeltaRef.current = delta;
                                    handleAndDispatchCustomEvent(TOAST_SWIPE_START, onSwipeStart, eventDetail, {
                                        discrete: false
                                    });
                                    event.target.setPointerCapture(event.pointerId);
                                } else if (Math.abs(x) > moveStartBuffer || Math.abs(y) > moveStartBuffer) {
                                    pointerStartRef.current = null;
                                }
                            }),
                            onPointerUp: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onPointerUp, (event)=>{
                                const delta = swipeDeltaRef.current;
                                const target = event.target;
                                if (target.hasPointerCapture(event.pointerId)) {
                                    target.releasePointerCapture(event.pointerId);
                                }
                                swipeDeltaRef.current = null;
                                pointerStartRef.current = null;
                                if (delta) {
                                    const toast = event.currentTarget;
                                    const eventDetail = {
                                        originalEvent: event,
                                        delta
                                    };
                                    if (isDeltaInDirection(delta, context.swipeDirection, context.swipeThreshold)) {
                                        handleAndDispatchCustomEvent(TOAST_SWIPE_END, onSwipeEnd, eventDetail, {
                                            discrete: true
                                        });
                                    } else {
                                        handleAndDispatchCustomEvent(TOAST_SWIPE_CANCEL, onSwipeCancel, eventDetail, {
                                            discrete: true
                                        });
                                    }
                                    toast.addEventListener("click", (event2)=>event2.preventDefault(), {
                                        once: true
                                    });
                                }
                            })
                        })
                    })
                }), context.viewport)
            })
        ]
    });
});
var ToastAnnounce = (props)=>{
    const { __scopeToast, children, ...announceProps } = props;
    const context = useToastProviderContext(TOAST_NAME, __scopeToast);
    const [renderAnnounceText, setRenderAnnounceText] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [isAnnounced, setIsAnnounced] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    useNextFrame(()=>setRenderAnnounceText(true));
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const timer = window.setTimeout(()=>setIsAnnounced(true), 1e3);
        return ()=>window.clearTimeout(timer);
    }, []);
    return isAnnounced ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_13__.Portal, {
        asChild: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_8__.VisuallyHidden, {
            ...announceProps,
            children: renderAnnounceText && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [
                    context.label,
                    " ",
                    children
                ]
            })
        })
    });
};
var TITLE_NAME = "ToastTitle";
var ToastTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, ...titleProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, {
        ...titleProps,
        ref: forwardedRef
    });
});
ToastTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "ToastDescription";
var ToastDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, ...descriptionProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, {
        ...descriptionProps,
        ref: forwardedRef
    });
});
ToastDescription.displayName = DESCRIPTION_NAME;
var ACTION_NAME = "ToastAction";
var ToastAction = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { altText, ...actionProps } = props;
    if (!altText.trim()) {
        console.error(`Invalid prop \`altText\` supplied to \`${ACTION_NAME}\`. Expected non-empty \`string\`.`);
        return null;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastAnnounceExclude, {
        altText,
        asChild: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastClose, {
            ...actionProps,
            ref: forwardedRef
        })
    });
});
ToastAction.displayName = ACTION_NAME;
var CLOSE_NAME = "ToastClose";
var ToastClose = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, ...closeProps } = props;
    const interactiveContext = useToastInteractiveContext(CLOSE_NAME, __scopeToast);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ToastAnnounceExclude, {
        asChild: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.button, {
            type: "button",
            ...closeProps,
            ref: forwardedRef,
            onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_12__.composeEventHandlers)(props.onClick, interactiveContext.onClose)
        })
    });
});
ToastClose.displayName = CLOSE_NAME;
var ToastAnnounceExclude = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeToast, altText, ...announceExcludeProps } = props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.Primitive.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": altText || void 0,
        ...announceExcludeProps,
        ref: forwardedRef
    });
});
function getAnnounceTextContent(container) {
    const textContent = [];
    const childNodes = Array.from(container.childNodes);
    childNodes.forEach((node)=>{
        if (node.nodeType === node.TEXT_NODE && node.textContent) textContent.push(node.textContent);
        if (isHTMLElement(node)) {
            const isHidden = node.ariaHidden || node.hidden || node.style.display === "none";
            const isExcluded = node.dataset.radixToastAnnounceExclude === "";
            if (!isHidden) {
                if (isExcluded) {
                    const altText = node.dataset.radixToastAnnounceAlt;
                    if (altText) textContent.push(altText);
                } else {
                    textContent.push(...getAnnounceTextContent(node));
                }
            }
        }
    });
    return textContent;
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const currentTarget = detail.originalEvent.currentTarget;
    const event = new CustomEvent(name, {
        bubbles: true,
        cancelable: true,
        detail
    });
    if (handler) currentTarget.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        (0,_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__.dispatchDiscreteCustomEvent)(currentTarget, event);
    } else {
        currentTarget.dispatchEvent(event);
    }
}
var isDeltaInDirection = (delta, direction, threshold = 0)=>{
    const deltaX = Math.abs(delta.x);
    const deltaY = Math.abs(delta.y);
    const isDeltaX = deltaX > deltaY;
    if (direction === "left" || direction === "right") {
        return isDeltaX && deltaX > threshold;
    } else {
        return !isDeltaX && deltaY > threshold;
    }
};
function useNextFrame(callback = ()=>{}) {
    const fn = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_11__.useCallbackRef)(callback);
    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_14__.useLayoutEffect)(()=>{
        let raf1 = 0;
        let raf2 = 0;
        raf1 = window.requestAnimationFrame(()=>raf2 = window.requestAnimationFrame(fn));
        return ()=>{
            window.cancelAnimationFrame(raf1);
            window.cancelAnimationFrame(raf2);
        };
    }, [
        fn
    ]);
}
function isHTMLElement(node) {
    return node.nodeType === node.ELEMENT_NODE;
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function focusFirst(candidates) {
    const previouslyFocusedElement = document.activeElement;
    return candidates.some((candidate)=>{
        if (candidate === previouslyFocusedElement) return true;
        candidate.focus();
        return document.activeElement !== previouslyFocusedElement;
    });
}
var Provider = ToastProvider;
var Viewport = ToastViewport;
var Root2 = Toast;
var Title = ToastTitle;
var Description = ToastDescription;
var Action = ToastAction;
var Close = ToastClose;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":
/*!************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCallbackRef: () => (/* binding */ useCallbackRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
// packages/react/use-callback-ref/src/useCallbackRef.tsx

function useCallbackRef(callback) {
  const callbackRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    callbackRef.current = callback;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":
/*!******************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useControllableState: () => (/* binding */ useControllableState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
// packages/react/use-controllable-state/src/useControllableState.tsx


function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  }
}) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);
  const setValue = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue;
        const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
        if (value2 !== prop) handleChange(value2);
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const uncontrolledState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp);
  const [value] = uncontrolledState;
  const prevValueRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);
  const handleChange = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onChange);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (prevValueRef.current !== value) {
      handleChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, handleChange]);
  return uncontrolledState;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs":
/*!**************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEscapeKeydown: () => (/* binding */ useEscapeKeydown)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-callback-ref */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");
// packages/react/use-escape-keydown/src/useEscapeKeydown.tsx


function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
  const onEscapeKeyDown = (0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(onEscapeKeyDownProp);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscapeKeyDown(event);
      }
    };
    ownerDocument.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => ownerDocument.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [onEscapeKeyDown, ownerDocument]);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":
/*!*************************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLayoutEffect: () => (/* binding */ useLayoutEffect2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
// packages/react/use-layout-effect/src/useLayoutEffect.tsx

var useLayoutEffect2 = Boolean(globalThis?.document) ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : () => {
};

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-previous/dist/index.mjs":
/*!********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-previous/dist/index.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePrevious: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
// packages/react/use-previous/src/usePrevious.tsx

function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-size/dist/index.mjs":
/*!****************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-size/dist/index.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSize: () => (/* binding */ useSize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");
// packages/react/use-size/src/useSize.tsx


function useSize(element) {
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0);
  (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs":
/*!***********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   VisuallyHidden: () => (/* binding */ VisuallyHidden)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js");
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-primitive */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-primitive/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(ssr)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js");
// packages/react/visually-hidden/src/VisuallyHidden.tsx



var NAME = "VisuallyHidden";
var VisuallyHidden = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
      _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.Primitive.span,
      {
        ...props,
        ref: forwardedRef,
        style: {
          // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
          ...props.style
        }
      }
    );
  }
);
VisuallyHidden.displayName = NAME;
var Root = VisuallyHidden;

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":
/*!********************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeRefs: () => (/* binding */ composeRefs),
/* harmony export */   useComposedRefs: () => (/* binding */ useComposedRefs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js");
// packages/react/compose-refs/src/composeRefs.tsx

function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
}

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs":
/*!************************************************************************************************!*\
  !*** ../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-slot/dist/index.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Root: () => (/* binding */ Root),
/* harmony export */   Slot: () => (/* binding */ Slot),
/* harmony export */   Slottable: () => (/* binding */ Slottable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js");
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/@radix-ui/react-compose-refs/dist/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "(rsc)/../../../../opt/hostedapp/node/root/app/node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js");
// packages/react/slot/src/Slot.tsx



var Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  const childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children);
  const slottable = childrenArray.find(isSlottable);
  if (slottable) {
    const newElement = slottable.props.children;
    const newChildren = childrenArray.map((child) => {
      if (child === slottable) {
        if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1) return react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null);
        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? newElement.props.children : null;
      } else {
        return child;
      }
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren) : null });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, { ...slotProps, ref: forwardedRef, children });
});
Slot.displayName = "Slot";
var SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
  const { children, ...slotProps } = props;
  if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
    const childrenRef = getElementRef(children);
    return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      ...mergeProps(slotProps, children.props),
      // @ts-ignore
      ref: forwardedRef ? (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.composeRefs)(forwardedRef, childrenRef) : childrenRef
    });
  }
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1 ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children });
};
function isSlottable(child) {
  return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          childPropValue(...args);
          slotPropValue(...args);
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
var Root = Slot;

//# sourceMappingURL=index.mjs.map


/***/ })

};
;