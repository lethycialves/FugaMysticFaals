

const scriptsInEvents = {

	async FolhaDeEventos1_Event8(runtime, localVars)
	{
		if (runtime.globalVars.G_Sangue >= 5) {
		    runtime.goToLayout("Vitoria"); 
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
