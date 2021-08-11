import { LuaFactory } from 'wasmoon';

async function run() {
  const factory = new LuaFactory();
  const lua = await factory.createEngine();
  
  try {
      lua.global.set('sum', (x, y) => x + y)
      await lua.doString(`
      s = sum(2, 2)
      print(s)
      function multiply(x, y)
        return x * y
      end
      function powerS(x)
        return x^s
      end
      `)
      const multiply = lua.global.get('multiply')
      console.debug(multiply(10, 10))
      const powerS = lua.global.get('powerS')
      document.querySelector('body').innerHTML = powerS(2)
  } finally {
      lua.global.close()
  }
  console.debug('main loaded')
}

run();
