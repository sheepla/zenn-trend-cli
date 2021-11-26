import { commandName, version } from "./version.ts";
import { colors, Command } from "./deps.ts";
import { fetchTrendTech } from "./mod.ts";

await new Command()
  .name(commandName)
  .version(version)
  .description("A command to fetch Zenn trend")
  .parse(Deno.args);

try {
  const res = await fetchTrendTech();

  for (const item of res) {
    const emoji = item["emoji"];
    const title = item["title"];
    const userDisplayName = item["user"]["name"];
    const userName = item["user"]["username"];
    const updatedAt = item["updatedAt"];
    const slug = item["slug"];
    const likedCount = item["likedCount"];
    const readingTime = item["readingTime"];
    const articleUrl = `https://zenn.dev/${userName}/articles/${slug}`;
    console.log(emoji, colors.bold(title), colors.yellow(`❤ ${likedCount}`));
    console.log(
      "  ",
      colors.green(`${userDisplayName} @${userName}`),
      colors.magenta(`⌚ ${readingTime}min read`),
      colors.dim(`✔ ${updatedAt}`),
    );
    console.log("  ", colors.blue(articleUrl));
    console.log("");
  }
} catch (error) {
  console.error(`${error}`);
}
