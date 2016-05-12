# Dump Course on Moodle

## Get Urls
First we need to get all the urls from chrome. Copy `selected_files.js` into the chrome console on the course you want to download. An array will be copied to the clipboard with all the urls.

## Downloading

Copy request as curl on chrome.
Then use add `-L` flag to follow redirects and iterate over the urls file that we copied.
Also add a `-O` flag so it saves to files.
```
for f in $(cat urls.txt); do
    curl -L ... <headers> $f -O
done
```

## Renaming Files
Now copy paste into chrome console `get_file_names.js` and repeat the process of getting each element on one line (see below for emacs steps). Then run
```
for line in $(cat urls.txt); do
    echo "$(basename $line)"
done > short_curlnames.txt
```
Now we have the actual names of the files output from curl.
Next we can actually rename the files.
Paste the two files together, assuming `short_curlnames.txt` has the filenames from curl and `real_filenames.txt` has actual names of files.

```
# Combine the two files so we can rename the files
paste ../short_curlnames.txt ../real_filenames.txt | while read curl_f real_name; do
    mv "$curl_f" "$real_name"
done
```

## Upload
All the files should be downloaded now and renamed correctly.
Uploading to google drive is the easiest to get all the files handled correctly.

## Notes
Emacs postprocessing of array
```
replace-string ", C-j (newline)
replace-string " <empty>
manually delete [ and ]
```
