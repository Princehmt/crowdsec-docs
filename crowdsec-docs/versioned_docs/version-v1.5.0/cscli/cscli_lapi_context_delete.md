---
id: cscli_lapi_context_delete
title: cscli lapi context delete
---
## cscli lapi context delete

Delete context to send with alerts

```
cscli lapi context delete [flags]
```

### Examples

```
cscli lapi context delete --key source_ip
cscli lapi context delete --value evt.Line.Src
		
```

### Options

```
  -h, --help            help for delete
  -k, --key strings     The keys to delete
      --value strings   The expr fields to delete
```

### Options inherited from parent commands

```
      --color string    Output color: yes, no, auto. (default "auto")
  -c, --config string   path to crowdsec config file (default "/etc/crowdsec/config.yaml")
      --debug           Set logging to debug.
      --error           Set logging to error.
      --info            Set logging to info.
  -o, --output string   Output format: human, json, raw.
      --trace           Set logging to trace.
      --warning         Set logging to warning.
```

### SEE ALSO

* [cscli lapi context](/cscli/cscli_lapi_context.md)	 - Manage context to send with alerts

