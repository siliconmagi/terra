(defproject terra "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [re-frame "0.9.1"]
                 [re-frisk "0.3.2"]
                 [secretary "1.2.3"]
                 [garden "1.3.2"]
                 [ns-tracker "0.3.0"]]

  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.4"]
            [lein-garden "0.2.8"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "resources/public/css"]

  :figwheel {:css-dirs ["resources/public/css"]
             :nrepl-port 7888}

  :garden {:builds [{:id           "screen"
                     :source-paths ["src/clj"]
                     :stylesheet   terra.css/screen
                     :compiler     {:output-to     "resources/public/css/screen.css"
                                    :pretty-print? true}}]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.8.2"]
                   [figwheel-sidecar "0.5.8"]
                   [com.cemerick/piggieback "0.2.1"]]
    :source-paths ["src" "dev"]
    :repl-options {; for nREPL dev you really need to limit output
                   :init (set! *print-length* 50)
                   :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "terra.core/mount-root"
                    :open-urls ["http://localhost:3449/index.html"]}
     :compiler     {:main                 terra.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}
                    }}
    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            terra.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}
    ]}
  )
