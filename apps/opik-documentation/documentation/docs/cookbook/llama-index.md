# Using Opik with LlamaIndex

This notebook showcases how to use Opik with LlamaIndex. [LlamaIndex](https://github.com/run-llama/llama_index) is a flexible data framework for building LLM applications:
> LlamaIndex is a "data framework" to help you build LLM apps. It provides the following tools:
>
> - Offers data connectors to ingest your existing data sources and data formats (APIs, PDFs, docs, SQL, etc.).
> - Provides ways to structure your data (indices, graphs) so that this data can be easily used with LLMs.
> - Provides an advanced retrieval/query interface over your data: Feed in any LLM input prompt, get back retrieved context and knowledge-augmented output.
> - Allows easy integrations with your outer application framework (e.g. with LangChain, Flask, Docker, ChatGPT, anything else).

For this guide we will be downloading the essays from Paul Graham and use them as our data source. We will then start querying these essays with LlamaIndex.

## Creating an account on Comet.com

[Comet](https://www.comet.com/site) provides a hosted version of the Opik platform, [simply create an account](https://www.comet.com/signup?from=llm) and grab you API Key.

> You can also run the Opik platform locally, see the [installation guide](https://www.comet.com/docs/opik/self-host/self_hosting_opik) for more information.


```python
import os
import getpass

os.environ["OPIK_API_KEY"] = getpass.getpass("Opik API Key: ")
os.environ["OPIK_WORKSPACE"] = input("Comet workspace (often the same as your username): ")
```

If you are running the Opik platform locally, simply set:


```python
# import os
# os.environ["OPIK_URL_OVERRIDE"] = "http://localhost:5173/api"
```

## Preparing our environment

First, we will install the necessary libraries, download the Chinook database and set up our different API keys.


```python
%pip install opik llama-index llama-index-agent-openai llama-index-llms-openai --quiet
```

And configure the required environment variables:


```python
import os
import getpass

os.environ["OPENAI_API_KEY"] = getpass.getpass("OpenAI API Key:")
```

In addition, we will download the Paul Graham essays:


```python
import os
import requests

# Create directory if it doesn't exist
os.makedirs('./data/paul_graham/', exist_ok=True)

# Download the file using requests
url = 'https://raw.githubusercontent.com/run-llama/llama_index/main/docs/docs/examples/data/paul_graham/paul_graham_essay.txt'
response = requests.get(url)
with open('./data/paul_graham/paul_graham_essay.txt', 'wb') as f:
    f.write(response.content)
```

## Using LlamaIndex

### Configuring the Opik integration

You can use the Opik callback directly by calling:


```python
from llama_index.core import Settings
from llama_index.core.callbacks import CallbackManager
from opik.integrations.llama_index import LlamaIndexCallbackHandler

opik_callback_handler = LlamaIndexCallbackHandler()
Settings.callback_manager = CallbackManager([opik_callback_handler])
```

Now that the callback handler is configured, all traces will automatically be logged to Opik.

### Using LLamaIndex

The first step is to load the data into LlamaIndex. We will use the `SimpleDirectoryReader` to load the data from the `data/paul_graham` directory. We will also create the vector store to index all the loaded documents.


```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

documents = SimpleDirectoryReader("./data/paul_graham").load_data()
index = VectorStoreIndex.from_documents(documents)
query_engine = index.as_query_engine()
```

We can now query the index using the `query_engine` object:


```python
response = query_engine.query("What did the author do growing up?")
print(response)
```

    The author worked on writing short stories and programming, starting with early attempts on an IBM 1401 in 9th grade, using an early version of Fortran. Later, the author transitioned to working with microcomputers, building a TRS-80 and writing simple games and programs. Despite enjoying programming, the author initially planned to study philosophy in college but eventually switched to AI due to a lack of interest in philosophy courses.


You can now go to the Opik app to see the trace:

![LlamaIndex trace in Opik](/img/cookbook/llamaIndex_cookbook.png)