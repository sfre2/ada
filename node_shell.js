const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'df5e0c3a-82a2-44a4-8ff1-71d6b481fcfb'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
