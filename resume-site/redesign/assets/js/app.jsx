// Marcus Henry — main app.
// Two themes (hermes / callum) swapped via [data-theme] on <html>.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "hermes",
  "showTools": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const data = window.SITE_DATA;

  // sync theme to <html data-theme>
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
  }, [t.theme]);

  const Hero = t.theme === "hermes" ? HermesHero : CallumHero;
  const flip = () => setTweak("theme", t.theme === "hermes" ? "callum" : "hermes");

  return (
    <div>
      <div className="shell">
        <TopNav theme={t.theme} onThemeToggle={flip} />
        <Hero data={data} />
        {t.showTools && <ToolsRow data={data} />}
        <About data={data} theme={t.theme} />
        <Projects data={data} theme={t.theme} />
        <Skills data={data} theme={t.theme} />
        <Contact data={data} theme={t.theme} />
        <Footer theme={t.theme} />
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Direction"
            value={t.theme}
            onChange={v => setTweak("theme", v)}
            options={[
              { value: "hermes", label: "Hermes" },
              { value: "callum", label: "Callum" },
            ]}
          />
          <TweakToggle label="Show tools row" value={t.showTools} onChange={v => setTweak("showTools", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
