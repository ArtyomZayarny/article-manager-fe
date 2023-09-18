"use strict";
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 43886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ ArticleBoard)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./app/context/article-context.tsx + 2 modules
var article_context = __webpack_require__(47787);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Delete.js
var Delete = __webpack_require__(30237);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ModeEdit.js
var ModeEdit = __webpack_require__(49233);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./app/context/modal-context.tsx
var modal_context = __webpack_require__(57986);
// EXTERNAL MODULE: ./app/utils/fetchData.ts
var fetchData = __webpack_require__(83937);
;// CONCATENATED MODULE: ./app/utils/formatDate.ts
const formatDate = (dateString)=>{
    const date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let format = month + "-" + day + "-" + year;
    return format;
};

;// CONCATENATED MODULE: ./app/components/Article.tsx
/* __next_internal_client_entry_do_not_use__ Article auto */ 








const Article = ({ article })=>{
    const { title, description, createDateTime } = article;
    const { deleteArticle, articles } = (0,react_.useContext)(article_context.ArticlesContext);
    const { open, setOpen, setModalType, setInputs } = (0,react_.useContext)(modal_context/* ModalContext */.t);
    const pathname = (0,navigation.usePathname)();
    const isAdminPage = (0,react_.useMemo)(()=>pathname.includes("admin"), [
        pathname
    ]);
    const handleEdit = (id, values)=>{
        setModalType("edit");
        setInputs(id, values);
        setOpen(true);
    };
    const handleDelete = async (id)=>{
        try {
            const res = await (0,fetchData/* fetchData */.r)(`http://localhost:3001/articles/${id}`, "DELETE");
            deleteArticle(id);
        } catch (error) {
            console.warn(error);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white rounded-md drop-shadow-md p-6 w-full max-w-sm flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "font-bold text-xl text-[#242424]",
                children: article.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-base text-[#6b6b6b]",
                children: article.description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-auto",
                children: [
                    isAdminPage && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "my-2 justify-between flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ModeEdit/* default */.Z, {
                                onClick: ()=>handleEdit(article.id, {
                                        title,
                                        description
                                    }),
                                className: "hover:cursor-pointer"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Delete/* default */.Z, {
                                onClick: ()=>handleDelete(article.id),
                                className: "hover:cursor-pointer"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "inline-flex text-slate-400 text-xs",
                        children: formatDate(createDateTime)
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
;// CONCATENATED MODULE: ./app/components/SearchBar.tsx
/* __next_internal_client_entry_do_not_use__ SearchBar auto */ 


const SearchBar = ()=>{
    const { setSearchString, articles, setStoredArticles } = (0,react_.useContext)(article_context.ArticlesContext);
    const handleChange = (str)=>{
        if (str.length >= 3) {
            setSearchString(str);
        }
        if (!str) {
            setStoredArticles(articles);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("submit");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        onSubmit: handleSubmit,
        className: "grid w-full max-w-4xl  bg-white rounded-md p-2 shadow-md  flex-1 md:flex-initial",
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            placeholder: "Search",
            className: " outline-none p-2 w-full",
            type: "text",
            onChange: (e)=>handleChange(e.target.value)
        })
    });
};

;// CONCATENATED MODULE: ./app/components/Panel.tsx





const Panel = ()=>{
    const { sortArticleByDate } = (0,react_.useContext)(article_context.ArticlesContext);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full max-w-4xl flex",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(SearchBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
                    onClick: sortArticleByDate,
                    variant: "outlined",
                    style: {
                        width: 200,
                        marginLeft: 15
                    },
                    children: "Sort by Date"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./app/components/ArticleBoard.tsx






const ArticleBoard = ()=>{
    const { storedArticles, loading, searchString, searchArticle } = (0,react_.useContext)(article_context.ArticlesContext);
    const pathname = (0,navigation.usePathname)();
    const isAdminPage = (0,react_.useMemo)(()=>pathname.includes("admin"), [
        pathname
    ]);
    (0,react_.useEffect)(()=>{
        if (searchString) {
            searchArticle(searchString);
        }
    }, [
        searchString
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-6",
        children: [
            storedArticles.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Panel, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center",
                children: [
                    loading && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Loading......."
                    }),
                    isAdminPage ? /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Click plus button to add your first article"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "flex justify-center",
                        children: "There is no article to show"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid grid-cols-3 gap-4 w-full max-w-4xl py-6",
                        children: storedArticles && storedArticles.map((article)=>/*#__PURE__*/ jsx_runtime_.jsx(Article, {
                                article: article
                            }, article.id))
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 47787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ArticlesContext: () => (/* binding */ ArticlesContext),
  ArticlesContextProvider: () => (/* binding */ ArticlesContextProvider)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./app/utils/fetchData.ts
var fetchData = __webpack_require__(83937);
;// CONCATENATED MODULE: ./app/hooks/useArticles.tsx


const useArticles = ()=>{
    const [articles, setArticles] = (0,react_.useState)([]);
    const [loading, setLoading] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setLoading(true);
        async function getArticles() {
            try {
                const articles = await (0,fetchData/* fetchData */.r)("http://localhost:3001/articles", "GET");
                articles && setArticles(articles);
            } catch (error) {
                console.warn(error);
            }
            setLoading(false);
        }
        getArticles();
    }, []);
    return {
        articles,
        loading,
        setArticles
    };
};

;// CONCATENATED MODULE: ./app/utils/sortByDate.ts
const sortByDate = (data, order = "newest")=>{
    return data.sort((a, b)=>{
        return order === "newest" ? Number(new Date(b.createDateTime)) - Number(new Date(a.createDateTime)) : Number(new Date(a.createDateTime)) - Number(new Date(b.createDateTime));
    });
};

;// CONCATENATED MODULE: ./app/context/article-context.tsx
/* __next_internal_client_entry_do_not_use__ ArticlesContext,ArticlesContextProvider auto */ 



const ArticlesContext = /*#__PURE__*/ (0,react_.createContext)({});
const ArticlesContextProvider = ({ children })=>{
    //Manage articles from DB
    const { articles, loading, setArticles } = useArticles();
    const [dateSort, setDateSort] = (0,react_.useState)("newest");
    const [storedArticles, setStoredArticles] = (0,react_.useState)([]);
    const [searchString, setSearchString] = (0,react_.useState)("");
    (0,react_.useEffect)(()=>{
        if (articles.length > 0) {
            setStoredArticles(sortByDate(articles));
        }
    }, [
        articles
    ]);
    const deleteArticle = (0,react_.useCallback)((id)=>{
        const updatedArticles = articles.filter((article)=>article.id !== id);
        setArticles(updatedArticles);
    }, [
        articles,
        setArticles
    ]);
    const addArticle = (0,react_.useCallback)((article)=>{
        setArticles((prevArticles)=>[
                ...prevArticles,
                article
            ]);
    }, [
        setArticles
    ]);
    const updateArticle = (0,react_.useCallback)((id, data)=>{
        const updatedArticles = articles.map((article)=>{
            if (article.id === id) {
                article.title = data.title;
                article.description = data.description;
                return article;
            }
            return article;
        });
        setArticles(updatedArticles);
    }, [
        setArticles,
        articles
    ]);
    const searchArticle = (0,react_.useCallback)((searchString)=>{
        setStoredArticles([
            ...articles.filter((article)=>article.title.toLowerCase().includes(searchString.toLowerCase()))
        ]);
    }, [
        articles,
        setArticles
    ]);
    const sortArticleByDate = (0,react_.useCallback)(()=>{
        toggleSortByDate();
    }, [
        dateSort,
        storedArticles
    ]);
    const toggleSortByDate = (0,react_.useCallback)(()=>{
        return dateSort === "newest" ? (setDateSort("oldest"), setStoredArticles(sortByDate(articles, "oldest"))) : (setDateSort("newest"), setStoredArticles(sortByDate(articles, "newest")));
    }, [
        dateSort,
        storedArticles
    ]);
    const value = {
        articles,
        loading,
        deleteArticle,
        addArticle,
        updateArticle,
        searchArticle,
        searchString,
        setSearchString,
        storedArticles,
        setStoredArticles,
        sortArticleByDate
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ArticlesContext.Provider, {
        value: value,
        children: children
    });
};


/***/ }),

/***/ 57986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ ModalContextProvider),
/* harmony export */   t: () => (/* binding */ ModalContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const ModalContextProvider = ({ children })=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [modalType, setModalType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("add");
    const [inputs, setInputs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const values = {
        open,
        setOpen,
        handleOpen,
        handleClose,
        modalType,
        setModalType,
        inputs,
        setInputs
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContext.Provider, {
        value: values,
        children: children
    });
};


/***/ })

};
;